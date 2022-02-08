import Head from 'next/head';
import Image from 'next/image';
import styles from './Skill.module.scss';
import { Parallax } from 'react-scroll-parallax';
import { Fade } from 'react-awesome-reveal';

export default function Skill(data) {
  return (
    <section id='skills' className={styles.skill}>
      <div className={styles.skill_separator}>
        <Image
          src={`/img/tilt.svg`}
          alt='Moi'
          width={100}
          height={10}
          layout='responsive'
          loading='eager'
        />
      </div>
      <div className={styles.skill_container}>
        <Fade>
          <div className={styles.skill_container_box}></div>
        </Fade>
        <Parallax className={styles.skill_container_parallax} y={[-200, -400]}>
          <h2 className='mainTitle'>Mes compétences</h2>
        </Parallax>
        <Fade delay='100'>
          <div className={styles.skill_container_skills}>
            <article className={styles.skill_container_skills_article}>
              <lord-icon
                src='/img/icons/anihkfxp.json'
                trigger='loop'
                colors='primary:#ffffff,secondary:#7166ee'
                stroke='56'
                style={{ width: '200px', height: '200px' }}
              ></lord-icon>

              <h3>Front end</h3>
              <div className={styles.skill_container_skills_article_content}>
                <span>Lanquage</span>
                <ul>
                  <li>HTML5</li>
                  <li>CSS/SASS</li>
                  <li>JS ES6</li>
                  <li>PHP (niveau débutant)</li>
                </ul>
                <span>FrameWork/Librairie</span>
                <ul>
                  <li>React</li>
                  <li>NextJs</li>
                  <li>Redux</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </article>
            <article className={styles.skill_container_skills_article}>
              <lord-icon
                src='/img/icons/xxtkutpo.json'
                trigger='loop'
                colors='primary:#ffffff,secondary:#7166ee'
                style={{ width: '200px', height: '200px' }}
              ></lord-icon>

              <h3>Back end</h3>
              <div className={styles.skill_container_skills_article_content}>
                <ul>
                  <li>NodeJs</li>
                  <li>Express</li>
                  <li>API REST</li>
                  <li>socket.io</li>
                  <li>PostgreSQL</li>
                  <li>SQL</li>
                  <li>MYSQL</li>
                  <li>MongoDB / Mongoose</li>
                  <li>Sequelize</li>
                </ul>
              </div>
            </article>
            <article className={styles.skill_container_skills_article}>
              <lord-icon
                src='/img/icons/wrprwmwt.json'
                trigger='loop'
                colors='primary:#ffffff,secondary:#7166ee'
                style={{ width: '200px', height: '200px' }}
              ></lord-icon>

              <h3>Infra</h3>
              <div className={styles.skill_container_skills_article_content}>
                <span>Système</span>
                <ul>
                  <li>Windows server 2008r2/2012/2016</li>
                  <li>Windows 7/8/10</li>
                  <li>Debian/Ubuntu</li>
                  <li>VmWare ESXI6</li>
                  <li>Hyper-V</li>
                  <li>Active Directory</li>
                  <li>DNS, DHCP, SMB, FTP, SFTP</li>
                  <li>Datacore storage/SAN/ISCSI</li>
                  <li>IPBX</li>
                  <li>Nagios</li>
                  <li>GLPI/OCS inventory</li>
                  <li>Docker</li>
                  <li>Ngnix</li>
                  <li>Veeam Backup & Replication</li>
                  <li>Symantec backup exec</li>
                </ul>
                <span>Réseaux</span>
                <ul>
                  <li>Conf switch broadcom/Cisco/HPE</li>
                  <li>Routage RIP, OSPF, VLAN</li>
                  <li>Wifi, controleur wifi</li>
                  <li>Firewall Fortinet, Orange unified defense, UFW...</li>
                </ul>
              </div>
            </article>
            <article className={styles.skill_container_skills_article}>
              <lord-icon
                src='/img/icons/dtgezzsi.json'
                trigger='loop'
                colors='primary:#ffffff,secondary:#7166ee'
                style={{ width: '200px', height: '200px' }}
              ></lord-icon>

              <h3>Autres</h3>
              <div className={styles.skill_container_skills_article_content}>
                <ul>
                  <li>Gestion de projets (Agile)</li>
                  <li>Merise, MCD/MLD</li>
                  <li>Git/GitHub</li>
                  <li>npm/yarn</li>
                  <li>Leaflet</li>
                  <li>Phaser</li>
                </ul>
              </div>
            </article>
          </div>
        </Fade>
      </div>
    </section>
  );
}
