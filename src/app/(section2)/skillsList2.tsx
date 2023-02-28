import Image from "next/image";

import cssImg from "../../images/skills/css.svg";
import dockerImg from "../../images/skills/docker.svg";
import figmaImg from "../../images/skills/figma.svg";
import firebaseImg from "../../images/skills/firebase.svg";
import gitImg from "../../images/skills/git.svg";
import githubImg from "../../images/skills/github.svg";
import htmlImg from "../../images/skills/html.svg";
import jsImg from "../../images/skills/js.svg";
import mysqlImg from "../../images/skills/mysql.svg";
import nestjsImg from "../../images/skills/nestjs.svg";
import nextjsImg from "../../images/skills/nextjs.svg";
import nodejsImg from "../../images/skills/nodejs.svg";
import reactImg from "../../images/skills/react.svg";
import reactnativeImg from "../../images/skills/reactnative.svg";
import tailwindcssImg from "../../images/skills/tailwindcss.svg";

export default function SkillList2({ className }: { className: string }) {
  return (
    <div className={className}>
      <div>
        <Image priority src={jsImg} width={135} height={135} alt="Skills" />
        <Image priority src={htmlImg} width={135} height={135} alt="Skills" />
        <Image priority src={cssImg} width={135} height={135} alt="Skills" />
        <Image priority src={reactImg} width={135} height={135} alt="Skills" />
        <Image priority src={reactnativeImg} width={135} height={135} alt="Skills" />
      </div>
      <div>
        <Image priority src={nextjsImg} width={135} height={135} alt="Skills" />
        <Image priority src={firebaseImg} width={135} height={135} alt="Skills" />
        <Image priority src={tailwindcssImg} width={135} height={135} alt="Skills" />
        <Image priority src={nodejsImg} width={135} height={135} alt="Skills" />
        <Image priority src={nestjsImg} width={135} height={135} alt="Skills" />
      </div>
      <div>
        <Image priority src={figmaImg} width={135} height={135} alt="Skills" />
        <Image priority src={dockerImg} width={135} height={135} alt="Skills" />
        <Image priority src={mysqlImg} width={135} height={135} alt="Skills" />
        <Image priority src={gitImg} width={135} height={135} alt="Skills" />
        <Image priority src={githubImg} width={135} height={135} alt="Skills" />
      </div>
    </div>
  );
}
