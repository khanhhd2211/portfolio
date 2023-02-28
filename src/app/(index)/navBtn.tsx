import Link from "next/link";
import * as React from "react";
import styles from "../Page.module.css";

export default function NavBtn() {
  return (
    <div className={styles.navBtn}>
      <Link href="/">
        <div className={styles.activeNavBtn}>About Me</div>
      </Link>
      <Link href="/skills">
        <div>Skills</div>
      </Link>
      <Link href="/projects">
        <div>Projects</div>
      </Link>
      <Link href="/contact">
        <div>Contact</div>
      </Link>
    </div>
  );
}
