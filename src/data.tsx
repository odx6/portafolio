
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import js from "./assets/js.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";
import sass from "./assets/sass.svg";
import typ from "./assets/typ.svg";
import astro from "./assets/astro.svg";
import Blog from "./assets/BlogPersonal.png";
import Laravel from "./assets/laravel-2.svg";
import Mysql from "./assets/mysql_plain_wordmark_logo_icon_146415.svg";
import Wagtail from "./assets/wagtail_logo_icon_249234.svg";
import jquery  from "./assets/444684-673ab7.svg";
import Node from "./assets/736399-673ab7.svg";
import python from "./assets/python.svg";
import Decorator from "./assets/Decorator.png";
import Reacts from "./assets/React.png";
import TypePortafolio from "./assets/Portafolio.png";
import Clinica from "./assets/Clinica.png";
import Bot from "./assets/bootstrap-icon.svg";




const cards = [
  {
    id: 13,
    name: "BlogPersonal",
    image: [Blog],
    tecno: [html,css,js,Wagtail,jquery,Node, python],
    descrip:
      "Blog personal diseñado con python, django y wagtail",
    url: "https://blog-4dsv.onrender.com/",
    urlGithub: "https://blog-4dsv.onrender.com/",
  },
  {
    id: 11,
    name: "Decorator",
    image: [Decorator],
    tecno: [css,html, js, sass],
    descrip:
      "Transformador de textox a un formato para titulos llamativos.",
    url: "https://llndkslndkns.000webhostapp.com/",
    urlGithub: "https://llndkslndkns.000webhostapp.com/",
  },
  {
    id: 1,
    name: "React api",
    image: [Reacts],
    tecno: [react, js, css],
    descrip:
      "Componentes mediante react consumiendo un api de  personajes de rick y morty",
    url: "https://superlative-marzipan-51e469.netlify.app/",
    urlGithub: "https://superlative-marzipan-51e469.netlify.app/",
  },
  
  {
    id: 2,
    name: "Portfolio",
    image: [TypePortafolio],
    tecno: [astro, typ, tailwind],
    descrip: "Portafolio personal desarrollado con React",
    url: "https://bright-pudding-0ac17c.netlify.app/",
    urlGithub: "https://bright-pudding-0ac17c.netlify.app/",
  },
{
    id: 14,
    name: "Sistema Web Para la clinica Almendros",
    image: [Clinica],
    tecno: [css, html,Laravel,Mysql,js,jquery,Bot],
    descrip: "Sistema Web para la gestion de citas,historiales clinicos y pagos",
    url: "https://clinica-99m6.onrender.com/login",
    urlGithub: "https://clinica-99m6.onrender.com/login",
  },
  
];

export default cards;
