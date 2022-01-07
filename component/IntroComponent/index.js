import styles from "./styles.module.css";

function IntroComponent() {
  return (
    <div className={styles.container}>
      <h1
        style={{
          fontSize: "4.5rem",
          textAlign: "center",
          fontWeight: "lighter",
          marginBottom: 0,
          letterSpacing: "2px",
          lineHeight: "2rem",
        }}
      >
        Drishti Makhijani
      </h1>
      <h1
        style={{
          fontSize: "4.5rem",
          textAlign: "center",
          letterSpacing: "2px",
          fontWeight: "300",
          marginBottom: 0,

          marginTop: "0rem",
        }}
      >
        Social Entrepreneur
      </h1>
      <h1
        style={{
          fontSize: "4.5rem",
          textAlign: "center",
          letterSpacing: "2px",
          fontWeight: "300",
          lineHeight: "2rem",
          marginTop: "0rem",
        }}
      >
        Computer Science Student
      </h1>
    </div>
  );
}

export default IntroComponent;
