import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
function StartupJourney() {
  return (
    <div className={styles.container} id="projects">
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
        Startup Journey
      </h1>
      <div className={styles.flexDiv}>
        <Link href="https://projectqadira.in">
          <div className={styles.imgDiv}>
            <Image
              className={styles.imagelogo}
              src="/assets/qadira.png"
              width="550"
              height="600"
            />
            <h1 style={{ marginBottom: 0, marginTop: 30 }}>Project Qadira</h1>
            <p style={{ marginTop: 0 }}>
              <span
                style={{
                  greyscale: "0%",
                  fontWeight: "bolder",
                  color: "#000",
                  fontSize: "1.6rem",
                }}
              >
                +500{" "}
              </span>
              Lives Impacted Within 4 Months
            </p>
          </div>
        </Link>
        <Link href="">
          <div className={styles.imgDiv}>
            <Image
              className={styles.imagelogo}
              src="/assets/tempt.jpeg"
              width="432"
              height="486"
            />
            <h1 style={{ marginBottom: 0, marginTop: 30 }}>Temptation Talk</h1>
            <p style={{ marginTop: 0 }}>
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                  fontSize: "1.6rem",
                }}
              >
                700X
              </span>{" "}
              Profit
            </p>
          </div>
        </Link>
        <div className={styles.imgDiv}>
          <Image
            className={styles.imagelogo}
            src="/assets/prettypurple.png"
            width="600"
            height="600"
          />
          <h1 style={{ marginBottom: 0, marginTop: 30 }}>Pretty Purple</h1>
          <p style={{ marginTop: 0 }}>
            <span
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: "1.6rem",
              }}
            >
              10000+
            </span>{" "}
            Readers
            <br />
            <span
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: "1.6rem",
              }}
            >
              700{" "}
            </span>
            Bloggers
          </p>
        </div>
      </div>
    </div>
  );
}

export default StartupJourney;
