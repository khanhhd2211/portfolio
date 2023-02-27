import ggplot2 from "../../images/skills/ggplot2.svg";
import rImg from "../../images/skills/R.svg";

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
    id: 0,
    name: "test",
    created_at: new Date(),
    desc: "Lorem ipsum dolor sit amet consectetur. Ut aliquam maecenas netus placerat sed nisl.",
    img: "/images/test.png",
    tools: [rImg, ggplot2],
    link: "#1",
    type: 1,
  },
  {
    id: 1,
    name: "Báo cáo AI và Digitalization",
    created_at: new Date(),
    desc: "Lorem ipsum dolor sit amet consectetur. Ut aliquam maecenas netus placerat sed nisl.",
    img: "/images/test.png",
    tools: [rImg, ggplot2],
    link: "#2",
    type: 1,
  },
  {
    id: 2,
    name: "Báo cáo AI và Digitalization 22332",
    created_at: new Date(),
    desc: "Lorem ipsum dolor sit amet consectetur. Ut aliquam maecenas netus placerat sed nisl.",
    img: "/images/test.png",
    tools: [rImg, ggplot2],
    link: "#2",
    type: 1,
  },
  {
    id: 3,
    name: "Báo cáo AI và Digitalization 3",
    created_at: new Date(),
    desc: "Lorem ipsum dolor sit amet consectetur. Ut aliquam maecenas netus placerat sed nisl.",
    img: "/images/test.png",
    tools: [rImg, ggplot2],
    link: "#2",
    type: 1,
  },
  {
    id: 4,
    name: "Báo cáo AI và Digitalization 4",
    created_at: new Date(),
    desc: "Lorem ipsum dolor sit amet consectetur. Ut aliquam maecenas netus placerat sed nisl.",
    img: "/images/test.png",
    tools: [rImg, ggplot2],
    link: "#2",
    type: 2,
  },
];
