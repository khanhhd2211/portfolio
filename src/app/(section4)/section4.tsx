import styles from "./section4.module.css";

export default function Section4() {
  return (
    <div className={styles.wrapSec4}>
      <div className={styles.sec4}>
        <div className={styles.mainText}>
          Love to hear from you,
          <br />
          Get in touch 👋
        </div>
        <div className={styles.info}>
          <div>
            <div>Your name</div>
            <input placeholder="Enter your name" />
          </div>
          <div>
            <div>Your email</div>
            <input placeholder="example@hotmail.com" />
          </div>
        </div>
        <div className={styles.message}>
          <div> Message</div>
          <textarea rows={13} placeholder="Lorem ipsum dolor sit amet consectetur. Eu aliquam..." />
        </div>
        <button>Send it!</button>
      </div>
    </div>
  );
}
