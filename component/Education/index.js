import styles from "./styles.module.css";
function Education() {
  return (
    <div className={styles.container} id="achievments">
      <h1
        className={styles.mainHeading}
        style={{
          fontSize: "4rem",
          textAlign: "center",
          fontWeight: "lighter",
          marginTop: 20,
          letterSpacing: "2px",
        }}
      >
        Achievements & Experience
      </h1>
      <div className={styles.flexDiv}>
        <div className={styles.textContainer}>
          <div className={styles.innerContainer}>
            <h1>2017</h1>
            <p>IIT Delhi</p>
            <p className={styles.smallerPara}>
              Merit award for paper presentation
            </p>
            <p style={{ marginTop: 50 }}>IIT Hyderabad</p>
            <p className={styles.smallerPara}>1st Prize ELAN</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1>2018</h1>
          <p> Indo Japan Exchange Science Programme</p>
          <p className={styles.smallerPara}>
            Nominated for SAKURA - Fully sponsored by Japan Science And
            Technology
          </p>
          <p style={{ marginTop: 50 }}>ISSET NASA</p>
          <p className={styles.smallerPara}>Team Challengers Winner</p>
          <p style={{ marginTop: 50 }}>
            Indo Russian International Exchange Programme
          </p>
          <p className={styles.smallerPara}>
            Science Talent programme - Sponsored by Govt. of India
          </p>
        </div>

        <div className={styles.textContainer}>
          <h1>Experience</h1>
          <p>
            Founder, CEO -{" "}
            <span style={{ color: "#999999" }}>Project Qadira</span>
          </p>
          <p>
            VP -{" "}
            <span style={{ color: "#999999" }}>
              {" "}
              Enactus Bennett University
            </span>
          </p>
          <p>
            Core Team Student Council -{" "}
            <span style={{ color: "#999999" }}>Bennett University</span>
          </p>
          <p>
            Co-organiser -{" "}
            <span style={{ color: "#999999" }}>TEDx Bennett University</span>
          </p>
          <p>
            Vice President -{" "}
            <span style={{ color: "#999999" }}>
              Student Counsel of Birla Vidya Niketan
            </span>
          </p>
          <p className={styles.smallerPara}>2018-2019</p>
          <p>
            Founder , CEO -{" "}
            <span style={{ color: "#999999" }}> Pretty Purple</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
