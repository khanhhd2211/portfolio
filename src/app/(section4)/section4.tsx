import styles from "./section4.module.css";

export default function Section4() {
  return (
    <div className={styles.wrapSec4}>
      <form action="https://formsubmit.co/1f36a4f24800fa0d8a140201b0df5773" method="POST" className={styles.sec4}>
        <div className={styles.mainText}>
          Love to hear from you,
          <br />
          Get in touch 👋
        </div>
        <div className={styles.info}>
          <div>
            <div>Your name</div>
            <input name="name" type='text' placeholder="Enter your name" />
          </div>
          <div>
            <div>Your email</div>
            <input name="email" type='email' placeholder="example@hotmail.com" />
          </div>
        </div>
        <div className={styles.message}>
          <div> Message</div>
          <textarea name="message" rows={13} placeholder="Lorem ipsum dolor sit amet consectetur. Eu aliquam..." />
        </div>
        <div className={styles.wrapSubmit}>
          <button type="submit">Send it!</button>
          <div>
            <span>Email: hoangdangkhanh12c1@gmail.com</span>
            <span>Phone: <a href="tel:+84931622605">(+84) 93 162 2605</a></span>
            <span>Linked in: <a href="https://www.linkedin.com/in/khanhhd2001"><u>linkedin.com/in/khanhhd2001</u></a></span>
          </div>
        </div>
      </form>
    </div>
  );
}
