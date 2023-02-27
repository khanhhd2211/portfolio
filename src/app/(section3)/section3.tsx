"use client"
import { useState } from "react";
import { cards } from "./cards";
import { categories, Category } from "./categories";
import DropDown from "./dropdown";
import styles from "./section3.module.css";
import Slider from "./slider";


export default function Section3() {
  const [typeChoosed, setTypeChoosed] = useState<Category>(categories[0]);
  return (
    <div className={styles.sec3}>
      <div className={styles.sec3Header}>MY PROJECTS 👨‍💻</div>
      <div>
        <DropDown
          typeChoosed={typeChoosed}
          setTypeChoosed={setTypeChoosed}
          categories={categories}
        />
        <Slider cards={cards.filter(card => card.type === typeChoosed.id)} />
      </div>
    </div>
  );
}
