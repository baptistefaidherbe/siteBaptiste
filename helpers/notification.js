import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function createNotification() {
  NotificationManager.success(
    'Votre message a bien été envoyé !'
  );
}
