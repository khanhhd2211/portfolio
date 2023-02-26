import Section1 from "./(section1)/section1";
import Buttons from "./buttons";
import styles from "./Page.module.css";

export default function Home() {
  return (
    <div className={styles.mainBg}>
      <div className={styles.mainCard}>
        <Buttons />
        <Section1 />
      </div>
    </div>
  );
}
