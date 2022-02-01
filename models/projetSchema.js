import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projetShema = new Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  desc2: {
    type: String,
  },
  desc3: {
    type: String,
  },
  desc4: {
    type: String,
  },
  img: {
    type: String,
  },
  link: {
    type: String,
  },
  carouImg: {
    type: Array,
  },
});

module.exports =
  mongoose.models.projet || mongoose.model('projet', projetShema, 'projet');
