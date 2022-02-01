import styles from './Modal.module.scss';
import Image from 'next/image';
import { ImCancelCircle } from 'react-icons/im';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Modal(data) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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

  const handleClick = () => {
    data.setTogledModal(false);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.modal_cancel} onClick={handleClick}>
        <ImCancelCircle className={styles.modal_cancel_icon} />
      </div>
      <div className={styles.modal_carousel}>
        <Carousel
          ssr
          responsive={responsive}
          className={styles.modal_carousel_container}
        >
          {data.img !== undefined &&
            data.img.map((element) => (
              <div
                key={element}
                className={styles.modal_carousel_container_img}
              >
                 <Image
                  src={`/img/${element}`}
                  alt={element}
                  width={150}
                  height={100}
                  layout='responsive'
                  loading='eager'
                />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}
