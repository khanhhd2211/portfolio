import styles from './Page.module.css'

export default function Home() {
  return (
    <div className={styles.mainBg}>
      <div className={styles.mainCard}>
        <div className={styles.section1Text}>
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
        </div>
      </div>
    </div>
  );
}
