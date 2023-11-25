import React from "react";
import styles from "./home.module.css";
import pin from '../../assets/pin.svg'
import message from '../../assets/message.svg'
import share from '../../assets/share.svg'
import Buttons from "../../components/buttoons/Buttons";
import AnimacionOne from "../../components/animations/Ever/EverAnimation";

const Home: React.FC = () => {
  
  return (
    <section className={styles.home}>
      <article className={`${styles.full}`}>
        <h2 className="font-bold">Developer JR </h2>
        <p>
        Soy un programador apasionado y altamente motivado con experiencia en el desarrollo de software. Mi objetivo es contribuir a proyectos desafiantes y dinámicos, donde pueda utilizar mis conocimientos técnicos y creatividad para crear soluciones innovadoras. Tengo habilidades sólidas en múltiples lenguajes de programación y tecnologías, y estoy comprometido a mantenerme actualizado con las últimas tendencias en el campo del desarrollo de software.
          
        </p>
        <span className="text-primary-color">From:Ever</span>
        <div className="flex gap-3">
          <span className="flex justify-center items-center gap-1">
            <img className="w-5" src={message} alt="" />
            <h5>25</h5>
          </span>

          <span className="flex justify-center items-center gap-1">
            <img className="w-5" src={share} alt="" />
            <h5>83</h5>
          </span>

          <span className="flex justify-center items-center gap-1">
            <img className="w-5" src={pin} alt="" />
            <h5>45</h5>
          </span>
        </div>
      </article>
      <article className={`${styles.ever}`}>
        <h2 className="font-bold text-center z-20">Agustin Cruz Everardo Alvaro </h2>
        <Buttons url="https://api.whatsapp.com/send?phone=9515887515&text=MENSAJE" title="WhatsApp" />
        <Buttons url="https://drive.google.com/file/d/1cPoCZv8PNv4ISiBd6QSUCraTtDgqI9ML/view?usp=sharing" title="CV"/>
      </article>
      <AnimacionOne/>
      <span className={styles.item}></span>
      <span className={styles.item2}></span>
      <span className={styles.item3}></span>
      <span className={styles.item4}></span>

      <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-primary to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90 z-10"></span>
    </section>
  );
};

export default Home;
