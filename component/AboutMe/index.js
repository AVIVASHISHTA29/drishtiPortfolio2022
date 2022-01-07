import Image from "next/image";
import styles from "./styles.module.css";

function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.textContainer}>
          <h1>BIOGRAPHY</h1>
          <p>
            Work for money and design for love! I’m Bruno, an UI/UX Interaction
            Designer based in Poland.
          </p>
        </div>
        <div className={styles.textContainer}>
          <h1>CONTACT</h1>
          <p></p>
        </div>
        <div className={styles.textContainer}>
          <h1>SERVICES</h1>
          <p></p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/assets/drishti.jpeg" height="1020" width="600" />
      </div>
      <div className={styles.rightContainer}>
        <div
          className={styles.textContainer}
          style={{ textAlign: "right", marginLeft: "auto", display: "block" }}
        >
          <h1>Years of experience</h1>
          <p style={{ fontSize: "3rem" }}>+5 Years</p>
        </div>
        <div
          className={styles.textContainer}
          style={{ textAlign: "right", marginLeft: "auto", display: "block" }}
        >
          <h1>SATISFITATION CLIENTS</h1>
          <p style={{ fontSize: "3rem" }}>+1000</p>
        </div>
        <div
          className={styles.textContainer}
          style={{ textAlign: "right", marginLeft: "auto", display: "block" }}
        >
          <h1>CLIENTS ON WORLdWIDE</h1>
          <p style={{ fontSize: "3rem" }}>+80</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
