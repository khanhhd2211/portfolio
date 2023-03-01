import ggplot2 from "../../images/skills/ggplot2.svg";
import rImg from "../../images/skills/R.svg";
import tidyverse from "../../images/skills/tidyverse.svg";
import python from "../../images/skills/python.svg";

import next from "../../images/skills/nextjs.svg";
import nestjs from "../../images/skills/nestjs.svg";
import mysql from "../../images/skills/mysql.svg";
import firebase from "../../images/skills/firebase.svg";
import reactnative from "../../images/skills/reactnative.svg"
import js from "../../images/skills/js.svg";
import html from "../../images/skills/html.svg";
import css from "../../images/skills/css.svg";

export interface ICard {
  id: number;
  name: string;
  created_at: Date;
  img: string;
  desc: string;
  tools: string[];
  link: string;
  type: number;
}

export const cards: ICard[] = [
  {
    id: 1,
    name: "Blue Economy",
    created_at: new Date(),
    img: "https://i.imgur.com/aBWQ9aU.png",
    desc: "Descriptive statistics of the basic indicators of Blue Economy in the world",
    tools: [rImg, ggplot2, tidyverse],
    link: "https://rpubs.com/khanhhd2211/939761",
    type: 1,
  },
  {
    id: 2,
    name: "Olympics (1986 - 2016)",
    created_at: new Date(),
    img: "https://i.imgur.com/GwBUEYp.png",
    desc: "Olympics data analysis from 1986 to 2016, using map, interactive chart, ...",
    tools: [rImg, ggplot2, tidyverse],
    link: "https://rpubs.com/khanhhd2211/890602",
    type: 1,
  },
  {
    id: 3,
    name: "Foreign workers in Vietnam",
    created_at: new Date(),
    img: "https://i.imgur.com/L2Xt8bQ.png",
    desc: "Visualize the distribution of labor on the map and analyze the correlation",
    tools: [rImg, ggplot2, tidyverse],
    link: "https://rpubs.com/khanhhd2211/900991",
    type: 1,
  },
  {
    id: 4,
    name: "Digitalization Report",
    created_at: new Date(),
    img: "https://i.imgur.com/1XC6tQo.png",
    desc: "Analyzing the level of digitalization according to a survey of Vietnamese businesses",
    tools: [rImg, ggplot2, tidyverse],
    link: "https://rpubs.com/khanhhd2211/943309",
    type: 1,
  },
  {
    id: 6,
    name: "Video lectures using basic R",
    created_at: new Date(),
    img: "https://i.imgur.com/YKTyvOj.png",
    desc: "The basics of the R programming language used in statistics and data analysis",
    tools: [rImg],
    link: "https://www.youtube.com/playlist?list=PLMIaO-u3S5-jO2rMt8r8HD5ifiZv_Sd9O",
    type: 1,
  },
  {
    id: 5,
    name: "Text Mining - Customer Satisfaction",
    created_at: new Date(),
    img: "https://i.imgur.com/YIKM7ge.png",
    desc: "Use text mining methods to discover the factors of customer satisfaction for hotels in Nha Trang city",
    tools: [python, rImg, ggplot2, tidyverse],
    link: "https://drive.google.com/file/d/1-Fj9TCWzzmyXRp02HQl-xMlGTXcNAvao/view?usp=sharing",
    type: 1,
  },
  {
    id: 11,
    name: "Enactus NEU (Website)",
    created_at: new Date(),
    img: "https://i.imgur.com/L9NOd3F.png",
    desc: "Enactus NEU's website provides information and newsletter of the team (written in NextJs)",
    tools: [js, next, html, css, mysql],
    link: "https://enactus-neu.org",
    type: 2,
  },
  {
    id: 6,
    name: "WeCollect - Landing Page",
    created_at: new Date(),
    img: "https://i.imgur.com/50pWS6U.png",
    desc: "Landing page promoting the WeCollect project's application",
    tools: [js, html, css],
    link: "https://wecollect.enactus-neu.org",
    type: 2,
  },
  {
    id: 8,
    name: "WeCollect - API Server",
    created_at: new Date(),
    img: "https://i.imgur.com/MRhA5n2.png",
    desc: "Using NestJS connect to Ahamove API, MySQL database and Firebase services (Host on AWS EC2)",
    tools: [js, nestjs, firebase, mysql],
    link: "https://wecollect.enactus-neu.org",
    type: 2,
  },
  {
    id: 9,
    name: "SciEco - Website",
    created_at: new Date(),
    img: "https://i.imgur.com/cKDg3wi.png",
    desc: "Official SciEco (Science For Economics) website written in JS, HTML, CSS",
    tools: [js, html, css],
    link: "https://scienceforeconomics.com",
    type: 2,
  },
  {
    id: 10,
    name: "Gingin's Toyhouse",
    created_at: new Date(),
    img: "https://i.imgur.com/tCN6cnA.png",
    desc: "Gingin's Toyhouse selling children's toys website using Wordpress, JS, HTML, CSS",
    tools: [js, html, css],
    link: "https://gingintoyhouse.com",
    type: 2,
  },
  {
    id: 7,
    name: "WeCollect App (iOS & Android)",
    created_at: new Date(),
    img: "https://i.imgur.com/NhrLb4T.png",
    desc: "WeCollect connects people who need to donate and those who need to collect recyclable items.",
    tools: [js, reactnative, css],
    link: "https://wecollect.enactus-neu.org",
    type: 2,
  },

];
