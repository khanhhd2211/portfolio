"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../page.module.css";

export default function NavBtn() {
  const pathname = usePathname();
  return (
    <div className={styles.navBtn}>
      <Link href="/">
        <div className={pathname == "/" ? styles.activeNavBtn : ""}>
          About Me
        </div>
      </Link>
      <Link href="/skills/data">
        <div
          className={
            pathname == "/skills/data" || pathname == "/skills/dev"
              ? styles.activeNavBtn
              : ""
          }
        >
          Skills
        </div>
      </Link>
      <Link href="/projects">
        <div className={pathname == "/projects" ? styles.activeNavBtn : ""}>
          Projects
        </div>
      </Link>
      <Link href="/contact">
        <div className={pathname == "/contact" ? styles.activeNavBtn : ""}>
          Contact
        </div>
      </Link>
    </div>
  );
}
