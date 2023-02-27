"use client";
import { useRef, useState } from "react";
import { Category } from "./section3";
import styles from "./section3.module.css";
import useOnClickOutside from "./useOnClickOutside";

export interface IDropDownProps {
  categories: Category[];
}

export default function DropDown({ categories }: IDropDownProps) {
  const [typeChoosed, setTypeChoosed] = useState<Category>(categories[0]);
  const [expanded, setExpand] = useState<Boolean>(false);
  const ref = useRef<any>()
  useOnClickOutside(ref, () => setExpand(false));
  return <ul className={styles.selection}>
    <li className={styles.choosed} onClick={() => setExpand(!expanded)}>
      {typeChoosed.name}
    </li>
    <div
      style={{
        display: expanded ? "inline-block" : "none",
      }}
      ref={ref}
    >
      {categories
        .filter((cate) => cate.id !== typeChoosed.id)
        .map((cate) => {
          return (
            <li key={cate.id} onClick={() => setTypeChoosed(cate)}>
              {cate.name}
            </li>
          );
        })}
    </div>
  </ul>;
}
