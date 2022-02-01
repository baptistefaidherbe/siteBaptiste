import mongoose from 'mongoose';

export async function dbConnect() {
  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export async function dbDisconnect() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection closed');
  });
}
