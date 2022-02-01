import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const aboutShema = new Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  img: {
    type: String,
  },
});

module.exports =
  mongoose.models.about || mongoose.model('about', aboutShema, 'about');
