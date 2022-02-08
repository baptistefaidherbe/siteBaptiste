import styles from './Moon.module.scss';
import Image from 'next/image';

export default function moon() {
  return (
    <div className={styles.moonContainer}>
      <Image
        src='/img/star.png'
        alt='star'
        width={700}
        height={900}
        layout='fixed'
        loading='eager'
        className={styles.moonContainer_moon}
      />
    </div>
  );
}
