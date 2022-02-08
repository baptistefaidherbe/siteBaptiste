import classes from './Footer.module.scss';
import Image from 'next/image';


export default function Header() {



  return (
    <footer className={classes.footer}>
          <Image
              src='/img/logo.png'
              alt='logo'
              width={180}
              height={50}
              layout='fixed'
              loading='eager'
            />
        <p>©2022 BaptisteFaidherbe, Tous droits réservés.</p>

    </footer>
  );
}
