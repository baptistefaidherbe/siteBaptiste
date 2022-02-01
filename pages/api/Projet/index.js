import { dbConnect, dbDisconnect } from '../database';
import Projet from '../../../models/projetSchema';

export default async function handler(req, res) {
  const { type, slug } = req.query;

  await dbConnect();

  switch (type) {
    case 'projets':
      try {
        const result = await Projet.find({});
        res.status(200).json(result);
      } catch (error) {
        dbDisconnect();
        res.status(201).json({ message: 'error' });
      }
      break;
    case 'projet':
      try {
        const result = await Projet.findOne({ title: slug });
        res.status(200).json(result);
      } catch (error) {
        dbDisconnect();
        res.status(201).json({ message: 'error' });
      }
      break;
    default:
      dbDisconnect();
  }
}
