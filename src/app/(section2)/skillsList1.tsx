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
        <Image src={rImg} width={135} height={135} alt="Skills" />
        <Image src={ggplot2Img} width={135} height={135} alt="Skills" />
        <Image src={tidyrImg} width={135} height={135} alt="Skills" />
        <Image src={dplyrImg} width={135} height={135} alt="Skills" />
      </div>
      <div>
        <Image src={tidyverseImg} width={135} height={135} alt="Skills" />
        <Image src={gganimateImg} width={135} height={135} alt="Skills" />
        <Image src={rvestImg} width={135} height={135} alt="Skills" />
        <Image src={plotlyImg} width={135} height={135} alt="Skills" />
        <Image src={powerbiImg} width={135} height={135} alt="Skills" />
      </div>
      <div>
        <Image src={pythonImg} width={135} height={135} alt="Skills" />
        <Image src={mysqlImg} width={135} height={135} alt="Skills" />
        <Image src={gitImg} width={135} height={135} alt="Skills" />
        <Image src={githubImg} width={135} height={135} alt="Skills" />
        <Image src={markdownImg} width={135} height={135} alt="Skills" />
      </div>
    </div>
  );
}
