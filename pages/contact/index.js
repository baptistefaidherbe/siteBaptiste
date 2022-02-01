import styles from './Contact.module.scss';
import { useState } from 'react';
import api from '../../helpers/api';
import notification from '../../helpers/notification';
import { NotificationContainer } from 'react-notifications';
import { Fade } from 'react-awesome-reveal';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    notification();
    
    setFirstName('');
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');


    const data = {
      firstName,
      name,
      phone,
      email,
      message,
    };

    try {
      await api.post(`/api/Contact/`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'message':
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <section id='contact' className={styles.contact}>
      <div className={styles.contact_container}>
        <Fade delay='10'>
          <h2 className='mainTitle'>Contactez-moi</h2>
        </Fade>

        <div className={styles.contact_container_desc}>
          <p>Mon profil vous intéresse ? Vous avez des questions ? </p>
          <p>
            Laissez-moi vôtre message, je vous réponderai dans les plus brefs
            délais.
          </p>
        </div>

        <form className={styles.contact_container_form} onSubmit={handleSubmit}>
          <input
            id='firstName'
            type='text'
            onChange={handleChange}
            placeholder='Nom *'
            required='required'
            value={firstName}
          />

          <input
            id='name'
            type='text'
            onChange={handleChange}
            placeholder='Prénom *'
            required='required '
            value={name}
          />

          <input
            id='phone'
            type='text'
            onChange={handleChange}
            placeholder='Téléphone *'
            required='required'
            value={phone}
          />

          <input
            id='email'
            type='email'
            onChange={handleChange}
            placeholder='Email *'
            required='required'
            value={email}
          />

          <textarea
            id='message'
            type='text'
            rows='30'
            onChange={handleChange}
            placeholder='Message *'
            required='required'
            value={message}
          />

          <button className='button'>Envoyer</button>
        </form>
      </div>
      <NotificationContainer />
    </section>
  );
}
