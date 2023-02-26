import * as React from "react";
import Image from "next/image";
import myImg from "../../images/me.svg";
import styles from './section1.module.css'
import Button from "./buttons";

export default function Section1() {
  return (
    <div className={styles.sec1}>
      <div className={styles.sec1Text}>
        <div className={styles.mainText}>
          <div>Hi 🙋‍♂️,</div>
          <div>
            I’m <span>Khanh Hoang</span>,
          </div>
          <div>Fullstack Developer</div>
        </div>
        <div className={styles.descText}>
          {`I design and develop experiences that make people's lives simpler through Web and Mobile apps. I work with Figma, HTML5, CSS3, JavaScript, React, ReactNative and Flutter.`}
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className={styles.sec1Img}>
        <Image alt="My image" width={428.4} height={476.4} src={myImg} />
      </div>
    </div>
  );
}
