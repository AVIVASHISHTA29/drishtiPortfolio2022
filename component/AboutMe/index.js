import Image from "next/image";
import styles from "./styles.module.css";

function AboutMe() {
  return (
    <div className={styles.container} id="aboutme">
      <div className={styles.leftContainer}>
        <div className={styles.textContainer}>
          <h1>About Me</h1>
          <p>
            Meet Drishti Makhijani a 21 year old , changing the world one period
            at a time .she is the founder of project qadira and qadira hygiene,
            a CS student, kathak dancer and a visual artist . She has a zest for
            food life and basically anything that challenges her . She is a go
            getter by heart and most importantly a sucker for pizza and happy
            endings .
          </p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/assets/drishti.jpeg" height="1020" width="600" />
      </div>
      <div className={styles.rightContainer}>
        {/* <div
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
        </div> */}
        <div
          className={styles.textContainer}
          style={{ textAlign: "right", marginLeft: "auto" }}
        >
          <h1>CONTACT</h1>
          <p style={{ marginBottom: 0 }}>drishtimakhijani01@gmail.com</p>
          <p style={{ marginTop: 0 }}>New Delhi, India</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
