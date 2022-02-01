import styles from './Banner.module.scss';

export default function Banner(data) {
  return (
    <section
      style={{
        backgroundImage: `url('${process.env.BASE_URL}/img/${data.data.img}')`,
      }}
      className={styles.banner}
    >
      <h1 className='titleBanner'>{data.data.title}</h1>
    </section>
  );
}
