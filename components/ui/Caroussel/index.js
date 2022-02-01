import styles from './Carousel.module.scss';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Modal from '../Modal';
import { useState } from 'react';

export default function Caroussel(data) {
  const [togledModal, setTogledModal] = useState(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleModal = () => {
    setTogledModal(!togledModal);
  };

  return (
    <>
      {togledModal && <Modal setTogledModal={setTogledModal} img={data.img} />}
      <div className={styles.carousel}>
        <Carousel
          ssr
          responsive={responsive}
          className={styles.carousel_container}
        >
          {data.img !== undefined &&
            data.img.map((element) => (
              <div key={element} className={styles.carousel_container_img}>
                <Image
                  src={`/img/${element}`}
                  alt={element}
                  width={150}
                  height={100}
                  layout='responsive'
                  loading='eager'
                  onClick={handleModal}
                  name={element}
                />
              </div>
            ))}
        </Carousel>
      </div>
    </>
  );
}
