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
          {`I have primarily worked on data analysis, research, and statistical projects. However, I am keen on exploring product design and development projects, specifically those related to website and mobile app development.`}
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className={styles.sec1Img}>
        <Image priority alt="My image" width={428.4} height={476.4} src={myImg} />
      </div>
    </div>
  );
}

