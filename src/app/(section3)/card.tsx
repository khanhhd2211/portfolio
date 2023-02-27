import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ICard } from "./cards";
import styles from "./section3.module.css";

interface ICards extends ICard {
  className: string;
}

export default function Card({ className, name, link, created_at, img, desc, tools, type }: ICards) {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image className={styles.cardImg} height={225} width={470} alt="cardimg" src={img}/>
      <h2>{name}</h2>
      <p>
        <i>{`Published at: ${created_at.toLocaleDateString('en-GB')}`}</i>
      </p>
      <p>{desc}</p>
      <div className={styles.cardSkills}>
        {tools.map((tool, index) => (
          <Image width={30} height={30} alt="tool" key={index} src={tool} />
        ))}
      </div>
      <div className={styles.moreInfo}>
        <Link href={link}>MORE INFO</Link>
      </div>
    </div>
  );
}
