import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const parcoursSchema = new Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  img: {
    type: String,
  },
  year: {
    type: String,
  },
});

module.exports =
  mongoose.models.parcours || mongoose.model('parcours', parcoursSchema, 'parcours');
