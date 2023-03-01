import Link from "next/link";
import * as React from "react";
import styles from "./section1.module.css";

export default function Button() {
  return (
    <div className={styles.wrapSec1Btn}>
      <Link legacyBehavior passHref href="/HoangDangKhanh.pdf">
        <a className={styles.sec1Btn} target="_blank" rel="noopener noreferrer">
          MY RESUME
        </a>
      </Link>
      <Link href="/projects" className={`${styles.sec1Btn} ${styles.sec1Btn2}`}>
        WATCH MY PROJECTS
      </Link>
    </div>
  );
}
