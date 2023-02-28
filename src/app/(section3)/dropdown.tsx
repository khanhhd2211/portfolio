"use client";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Category } from "./categories";
import styles from "./section3.module.css";
import useOnClickOutside from "./useOnClickOutside";

export interface IDropDownProps {
  categories: Category[];
  typeChoosed: Category;
  setTypeChoosed: Dispatch<SetStateAction<Category>>;
}

export default function DropDown({ categories, typeChoosed, setTypeChoosed }: IDropDownProps) {
  const [expanded, setExpand] = useState<boolean>(false);
  const ref = useRef<any>();
  useOnClickOutside(ref, () => expanded && setExpand(false));
  return (
    <ul ref={ref} className={styles.selection}>
      <li className={styles.choosed} onClick={() => setExpand(!expanded)}>
        {typeChoosed.name}
      </li>
      <div
        style={{
          opacity: expanded ? 1 : 0,
          visibility: expanded ? "unset" : "hidden",
          transitionProperty: "all",
          transitionDuration: ".3s",
          transitionTimingFunction: "ease-in-out",
          zIndex: 999
        }}
      >
        {categories
          .filter((cate) => cate.id !== typeChoosed.id)
          .map((cate) => {
            return (
              <li key={cate.id} onClick={() => {
                setTypeChoosed(cate)
                setExpand(false)
              }}>
                {cate.name}
              </li>
            );
          })}
      </div>
    </ul>
  );
}
