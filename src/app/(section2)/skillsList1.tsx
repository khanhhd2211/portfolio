import Image from "next/image";

import dplyrImg from "../../images/skills/dplyr.svg";
import gganimateImg from "../../images/skills/gganimate.svg";
import gitImg from "../../images/skills/git.svg";
import githubImg from "../../images/skills/github.svg";
import markdownImg from "../../images/skills/markdown.svg";
import mysqlImg from "../../images/skills/mysql.svg";
import plotlyImg from "../../images/skills/plotly.svg";
import powerbiImg from "../../images/skills/powerbi.svg";
import pythonImg from "../../images/skills/python.svg";
import rvestImg from "../../images/skills/rvest.svg";
import tidyrImg from "../../images/skills/tidyr.svg";
import tidyverseImg from "../../images/skills/tidyverse.svg";

import rImg from "../../images/skills/R.svg";
import ggplot2Img from "../../images/skills/ggplot2.svg";

export default function SkillList1({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <Image priority src={rImg} width={100} height={100} alt="Skills" />
        <Image priority src={ggplot2Img} width={100} height={100} alt="Skills" />
        <Image priority src={tidyrImg} width={100} height={100} alt="Skills" />
        <Image priority src={dplyrImg} width={100} height={100} alt="Skills" />
      </div>
      <div>
        <Image priority src={tidyverseImg} width={100} height={100} alt="Skills" />
        <Image priority src={gganimateImg} width={100} height={100} alt="Skills" />
        <Image priority src={rvestImg} width={100} height={100} alt="Skills" />
        <Image priority src={plotlyImg} width={100} height={100} alt="Skills" />
        <Image priority src={powerbiImg} width={100} height={100} alt="Skills" />
      </div>
      <div>
        <Image priority src={pythonImg} width={100} height={100} alt="Skills" />
        <Image priority src={mysqlImg} width={100} height={100} alt="Skills" />
        <Image priority src={gitImg} width={100} height={100} alt="Skills" />
        <Image priority src={githubImg} width={100} height={100} alt="Skills" />
        <Image priority src={markdownImg} width={100} height={100} alt="Skills" />
      </div>
    </div>
  );
}
