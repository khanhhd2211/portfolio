import Image from "next/image";
import myImg from "../../images/me.svg";
import Button from "./buttons";
import styles from './section1.module.css';
import TypeWriter from "./TypeWriter";

export default function Section1() {
  return (
    <div className={styles.sec1}>
      <div className={styles.sec1Text}>
        <div className={styles.mainText}>
          <div>Hi 🙋‍♂️,</div>
          <div>
            I’m <span className={styles.primary}>Khanh Hoang</span>,
          </div>
          <div><TypeWriter/></div>
        </div>
        <div className={styles.descText}>
          {`I have primarily worked on data analysis, research, and statistical projects. However, I am keen on attempting product design and development related to websites and mobile apps.`}
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className={styles.sec1Img}>
        <Image priority alt="My image" src={myImg} />
      </div>
    </div>
  );
}

