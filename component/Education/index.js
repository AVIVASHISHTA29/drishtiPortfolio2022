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
            <h1>TALKS</h1>
            <p> Enactus VNC’s Fundraising Event</p>
            <p className={styles.smallerPara}>Empowering Women Entrepreneurs</p>
            <p style={{ marginTop: 50 }}>Girlup Noor</p>
            <p className={styles.smallerPara}>
              Talk On Moral And Economic Case Of Period Leaves
            </p>
            <p style={{ marginTop: 50 }}>GirlUp Delhi’s Fundraising Event</p>
            <p className={styles.smallerPara}>Journey Of Project Qadira</p>
            <p style={{ marginTop: 50 }}>
              International Conference On Menstrual Hygiene Management Practices
              By Sulabh{" "}
            </p>
            <p className={styles.smallerPara}>
              Represented India in paper presentation on MHM practices{" "}
            </p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1>ACHIEVEMENTS</h1>
          <p>Indo Russian International Exchange Programme</p>
          <p className={styles.smallerPara}>
            Represented India For The Science Talent Programme - Sponsored by
            Govt. of India
          </p>
          <p style={{ marginTop: 50 }}>Indo Japan Exchange Science Programme</p>
          <p className={styles.smallerPara}>
            Represented India for SAKURA - Fully sponsored by Japan Science And
            Technology
          </p>
          <p style={{ marginTop: 50 }}>ISSET NASA</p>
          <p className={styles.smallerPara}>Team Challengers Winner</p>
          <p>Toyota ‘Hackathon'</p>
          <p className={styles.smallerPara}>2nd Prize – Indian Road Safety</p>
          <p>IIT Delhi</p>
          <p className={styles.smallerPara}>
            Merit award for paper presentation
          </p>

          <p style={{ marginTop: 50 }}>IIT Hyderabad</p>
          <p className={styles.smallerPara}>1st Prize ELAN</p>
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
            Co-organiser -{" "}
            <span style={{ color: "#999999" }}>TEDx Bennett University</span>
          </p>
          <p>
            Core Team Student Council -{" "}
            <span style={{ color: "#999999" }}>Bennett University</span>
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
