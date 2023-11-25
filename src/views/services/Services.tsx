import styles from "./services.module.css";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import python from "../../assets/python.svg";
import node from "../../assets/node.svg";
import mongo from "../../assets/mongo.svg";
import react from "../../assets/react.svg";
import arrow from "../../assets/arrow.svg";
import code from "../../assets/code.svg";
import desing from "../../assets/desing.svg";
import web from "../../assets/web.svg";
import java from "../../assets/java_plain_wordmark_logo_icon_146457.svg";
import Laravel from "../../assets/laravel-2.svg";
import Mysql from "../../assets/mysql_plain_wordmark_logo_icon_146415.svg";
import jquery  from "../../assets/444684-673ab7.svg";
import Node from "../../assets/736399-673ab7.svg";
import Bot from "../../assets/bootstrap-icon.svg";


interface ServiceProps {
  lightMode: boolean;
}
const Tecnologies = [
  {
    tecno: html,
    name: "HTML",
  },
  {
    tecno: Bot,
    name: "Bootstrap",
  },
  {
    tecno: java,
    name: "java",
  },
  {
    tecno: jquery,
    name: "jquery",
  },
  {
    tecno: Node,
    name: "Node",
  },
  {
    tecno: Mysql,
    name: "Mysql",
  },
 {
    tecno: Laravel,
    name: "Laravel",
  },
  {
    tecno: css,
    name: "CSS",
  },

  
  {
    tecno: react,
    name: "react",
  },

  {
    tecno: python,
    name: "Python",
  },

  {
    tecno: node,
    name: "Node",
  },

  {
    tecno: mongo,
    name: "MongoDB",
  },
];

const Services: React.FC<ServiceProps> = ({lightMode}) => {
  return (
    <section className={styles.services}>
      <span className="flex items-center gap-1">
        <h2 className="text-2xl text-primary-color font-bold">Services</h2>
        <img className="w-7" src={arrow} alt="" />
      </span>
      <div className={styles.servicesContainer}>
        <article className={styles.tecnology}>
          <div className={`${styles.tecno}`}>
            {Tecnologies.map((tecno, index) => (
              <div className={`${styles.svg} w-14 flex flex-col justify-center items-center hover:animate-pulse animate-once`} key={index}>
                <img src={tecno.tecno} alt={tecno.name} />
                <h6>{tecno.name}</h6> 
              </div>
            ))}
          </div>
        </article>
        <article className={`${styles.cards}`}>
          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`}`}> <img className="w-10" src={code} alt="" /> <span>Programación</span></div>
          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`}`}> <img className="w-10" src={web} alt="" /> <span>Desarrollos Front-End y Back-end</span></div>
          <div className={`${styles.card} ${lightMode ? `${styles.white}` : `${styles.blue}`} `}> <img className="w-10" src={desing} alt="" /> <span>Integracion de Apis</span></div>
        </article>
      </div>
    </section>
  );
};

export default Services;
