import Section1 from "./(section1)/section1";
import Section2 from "./(section2)/section2";
import Section3 from "./(section3)/section3";
import Buttons from "./buttons";
import NavBtn from "./navBtn";
import styles from "./Page.module.css";

export default function Home() {
  return (
    <div className={styles.mainBg}>
      <div className={styles.mainCard}>
        <Buttons />
        <NavBtn />
        {/* <Section1 /> */}
        {/* <Section2 /> */}
        <Section3 />
      </div>
    </div>
  );
}
