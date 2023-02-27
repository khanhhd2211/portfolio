import styles from "./section3.module.css";
import rImg from "../../images/skills/R.svg";
import ggplot2 from "../../images/skills/ggplot2.svg";
import DropDown from "./dropdown";

export interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Data",
  },
  {
    id: 2,
    name: "UI Design",
  },
  {
    id: 3,
    name: "Website",
  },
  {
    id: 4,
    name: "App",
  },
];
const cards = [
  {
    name: "Báo cáo AI và Digitalization",
    created_at: new Date(),
    desc: "Lorem ipsum dolor sit amet consectetur. Ut aliquam maecenas netus placerat sed nisl.",
    tools: [rImg, ggplot2],
    type: 1,
  },
  {
    name: "Báo cáo AI và Digitalization 2",
    created_at: new Date(),
    desc: "Lorem ipsum dolor sit amet consectetur. Ut aliquam maecenas netus placerat sed nisl.",
    tools: [rImg, ggplot2],
    type: 1,
  },
  {
    name: "Báo cáo AI và Digitalization 3",
    created_at: new Date(),
    desc: "Lorem ipsum dolor sit amet consectetur. Ut aliquam maecenas netus placerat sed nisl.",
    tools: [rImg, ggplot2],
    type: 1,
  },
];

export default function Section3() {

  return (
    <div className={styles.sec3}>
      <div className={styles.sec3Header}>MY PROJECTS 👨‍💻</div>
      <div>
        <DropDown categories={categories} />
        <div>Card</div>
      </div>
    </div>
  );
}
