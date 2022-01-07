import styles from "./styles.module.css";
function Education() {
  return (
    <div className={styles.container}>
      <h1
        style={{
          fontSize: "4rem",
          textAlign: "center",
          fontWeight: "lighter",
          marginTop: 20,
          letterSpacing: "2px",
        }}
      >
        Education & Experience
      </h1>
      <div className={styles.flexDiv}>
        <div className={styles.textContainer}>
          <div className={styles.innerContainer}>
            <h1>2001-2020</h1>
            <p>Schooling And Other Things</p>
            <p className={styles.smallerPara}>Schooling And Other Things</p>
          </div>
          <div className={styles.innerContainer}>
            <h1>2001-2020</h1>
            <p>Schooling And Other Things</p>
            <p className={styles.smallerPara}>Schooling And Other Things</p>
          </div>
          <div className={styles.innerContainer}>
            <h1>2001-2020</h1>
            <p>Schooling And Other Things</p>
            <p className={styles.smallerPara}>Schooling And Other Things</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1>2020-Present</h1>
          <p>BVN , Etc</p>
          <div className={styles.innerContainer}>
            <h1>2001-2020</h1>
            <p>Schooling And Other Things</p>
            <p className={styles.smallerPara}>Schooling And Other Things</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <h1>2001-2020</h1>
          <p>BVN , Etc</p>
          <div className={styles.innerContainer}>
            <h1>2001-2020</h1>
            <p>Schooling And Other Things</p>
            <p className={styles.smallerPara}>Schooling And Other Things</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
