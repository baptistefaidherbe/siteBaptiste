import styles from './FallingStar.module.scss';
import { useEffect, useRef, useState } from 'react';

export default function fallingStar() {
  const element = useRef(null);

  const [isAnimate, setIsAnimate] = useState(true);
  useEffect(() => {
    function toggleAnimate() {
      if (isAnimate) {
        element.current.classList.add(styles.star);
        element.current.style.top = Math.random()*300+'px';
        element.current.style.left = Math.random()*100+'px';
        const test = () => {
          setIsAnimate(false);
        };
        setTimeout(test, 3000);
      } else {
        element.current.classList.remove(styles.star);
        const test = () => {
          setIsAnimate(true);
        };

        setTimeout(test, 8000);
      }
    }
    toggleAnimate();
  });

  return <div ref={element}></div>;
}
