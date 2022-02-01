import { dbConnect, dbDisconnect } from '../database';
import parcours from '../../../models/parcoursSchema';

export default async function handler(req, res) {
  const { method } = req;


  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const result = await parcours.find({});
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
