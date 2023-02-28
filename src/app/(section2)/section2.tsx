import * as React from "react";
import styles from "./section2.module.css";
import SkillList1 from "./skillsList1";
import SkillList2 from "./skillsList2";

export default function Section2({ type }: { type: string }) {
  return (
    <div className={styles.sec2}>
      <div className={styles.sec2MainText}>
        I have experience with these tools and technologies 👨‍🔧️
      </div>
      {type != 'dev' && <SkillList1 className={styles.sec2ImgList} />}
      {type == 'dev' && <SkillList2 className={styles.sec2ImgList} />}
    </div>
  );
}
