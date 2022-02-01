import classes from './Header.module.scss';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import MediaQuery from 'react-responsive';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Link, animateScroll as scroll } from 'react-scroll';
import LinkNext from 'next/link';

export default function Header() {
  const [navBar, setNavBar] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const router = useRouter();

  console.log(router.pathname);

  const changeNavBar = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  const handleClick = () => {
    setIsResponsive(!isResponsive);
  };

  useEffect(() => {
    return () => {
      if (isResponsive) {
        setIsResponsive(!isResponsive);
      }
    };
  }, [router.asPath, isResponsive]);

  useEffect(() => {
    window.addEventListener('scroll', changeNavBar);
  }, []);

  return (
    <header className={classes.Header}>
      <MediaQuery minWidth={970}>
        <nav
          className={
            !navBar
              ? classes.Header_nav
              : `${classes.Header_nav} ${classes.Header_nav_active}`
          }
        >
          <div className={classes.Header_nav_image}>
            <Image
              src='/img/logo.png'
              alt='Moi'
              width={180}
              height={50}
              layout='fixed'
              loading='eager'
            />
          </div>
          <ul className={classes.Header_nav_menu}>
            <li className={classes.Header_nav_menu_li}>
              {router.pathname === '/projet/[slug]' ? (
                <LinkNext
                  href={`${process.env.BASE_URL}/#home`}
                  as={`${process.env.BASE_URL}/#home`}
                  passHref={true}
                >
                  Accueil
                </LinkNext>
              ) : (
                <Link
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Accueil
                </Link>
              )}
            </li>
            <li className={classes.Header_nav_menu_li}>
              {router.pathname === '/projet/[slug]' ? (
                <LinkNext
                  href={`${process.env.BASE_URL}/#about`}
                  as={`${process.env.BASE_URL}/#about`}
                  passHref={true}
                >
                  Qui suis-je ?
                </LinkNext>
              ) : (
                <Link
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Qui suis-je ?
                </Link>
              )}
            </li>
            <li className={classes.Header_nav_menu_li}>
              {router.pathname === '/projet/[slug]' ? (
                <LinkNext
                  href={`${process.env.BASE_URL}/#skills`}
                  as={`${process.env.BASE_URL}/#skills`}
                  passHref={true}
                >
                  Mes compétences
                </LinkNext>
              ) : (
                <Link
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Mes compétences
                </Link>
              )}
            </li>
            <li className={classes.Header_nav_menu_li}>
              {router.pathname === '/projet/[slug]' ? (
                <LinkNext
                  href={`${process.env.BASE_URL}/#parcours`}
                  as={`${process.env.BASE_URL}/#parcours`}
                  passHref={true}
                >
                  Mon parcours
                </LinkNext>
              ) : (
                <Link
                  to='parcours'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Mon parcours
                </Link>
              )}
            </li>
            <li className={classes.Header_nav_menu_li}>
              {router.pathname === '/projet/[slug]' ? (
                <LinkNext
                  href={`${process.env.BASE_URL}/#project`}
                  as={`${process.env.BASE_URL}/#project`}
                  passHref={true}
                >
                  Mes projets
                </LinkNext>
              ) : (
                <Link
                  to='project'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Mes projets
                </Link>
              )}
            </li>
            <li className={classes.Header_nav_menu_li}>
              {router.pathname === '/projet/[slug]' ? (
                <LinkNext
                  href={`${process.env.BASE_URL}/#project`}
                  as={`${process.env.BASE_URL}/#project`}
                  passHref={true}
                >
                  Contact
                </LinkNext>
              ) : (
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </MediaQuery>
      <MediaQuery maxWidth={969}>
        <div className={classes.Header_nav2}>
          <FiMenu onClick={handleClick} className={classes.Header_nav2_icon} />
          <div className={classes.Header_nav2_logo}>
            <Image
              src='/img/logo.png'
              alt='Moi'
              width={180}
              height={50}
              layout='fixed'
              loading='eager'
            />
          </div>
        </div>
        {isResponsive && (
          <div className={classes.Header_responsiveActif}>
            <AiOutlineCloseCircle
              onClick={handleClick}
              className={classes.Header_responsiveActif_icon}
            />
            <div className={classes.Header_responsiveActif_logo}>
              <Image
                src='/img/logo.png'
                alt='Moi'
                width={180}
                height={50}
                layout='fixed'
                loading='eager'
              />
            </div>
            <nav className={classes.Header_responsiveActif_nav}>
              <ul className={classes.Header_responsiveActif_nav_menu}>
                <li>
                  <LinkNext href='/'>Accueil</LinkNext>
                </li>
                <li>
                  <LinkNext href={`${process.env.BASE_URL}/#about`}>
                    Qui suis-je
                  </LinkNext>
                </li>
                <li>
                  <LinkNext href={`${process.env.BASE_URL}/#skills`}>
                    Mes compétences
                  </LinkNext>
                </li>
                <li>
                  <LinkNext href={`${process.env.BASE_URL}/#parcours`}>
                    Mon parcours
                  </LinkNext>
                </li>
                <li>
                  <LinkNext href={`${process.env.BASE_URL}/#project`}>
                    Mes projets
                  </LinkNext>
                </li>
                <li>
                  <LinkNext href={`${process.env.BASE_URL}/#contact`}>
                    Contact
                  </LinkNext>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </MediaQuery>
    </header>
  );
}
