import React from "react";
import styles from "./about.module.css";
import arrow from "../../assets/arrow.svg";
import pin from "../../assets/pin.svg";
import message from "../../assets/message.svg";
import share from "../../assets/share.svg";
import ever from "../../assets/EVER.jpg";

import Footer from "../../components/footer/Footer";

interface AboutProps {
  lightMode: boolean;
}

const About: React.FC<AboutProps> = ({lightMode}) => {
  return (
    <section className={`${styles.about}`}>
      <span className="flex items-center gap-1">
        <h2 className="text-2xl text-primary-color font-bold">About</h2>
        <img className="w-7" src={arrow} alt="" />
      </span>
      <div className={styles.aboutMe}>
        <article className={styles.me}>
          <img
            className={`${styles.img} z-10 m-auto hover:animate-jump animate-once
`}
            src={ever}
            alt=""
          />
          <p>
           Hola mi nombre es Everardo Alvaro Agustin Cruz Originario de Oaxaca de juarez,un joven apasionado con la tecnologia y con ganas en el desarrollo, el cual busca brindar una mejor experiencia al usuario.
          </p>
          <span className="text-primary-color">Ever</span>
          <div className="flex gap-3">
            <span className="flex justify-center items-center gap-1">
              <img className="w-5" src={message} alt="" />
              <h5>0</h5>
            </span>

            <span className="flex justify-center items-center gap-1">
              <img className="w-5" src={share} alt="" />
              <h5>0</h5>
            </span>

            <span className="flex justify-center items-center gap-1">
              <img className="w-5" src={pin} alt="" />
              <h5>0</h5>
            </span>
          </div>
        </article>
        <article className={styles.cards}>
          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`}`}>
            <p className={styles.tip}>Udemy</p>
            <p className={styles.secondText}>React, Node.js, Javascript</p>
          </div>

          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`}`}>
            <p className={styles.tip}>Instituto tecnologico de oaxaca</p>
            <p className={styles.secondText}>Egresado 2017-2023</p>
          </div>

          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`}`}>
            <p className={styles.tip}>Udemy</p>
            <p className={styles.secondText}>HTML, CSS, laravel,jquery</p>
          </div>

          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`}`}>
            <p className={styles.tip}>Instituto tecnologico </p>
            <p className={styles.secondText}>Python, SQL,Android</p>
          </div> 
        </article>
      </div>
      <Footer  lightMode={lightMode} />
      
    </section>
  );
};

export default About;
