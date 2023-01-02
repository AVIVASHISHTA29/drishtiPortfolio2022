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
      <h2 className={styles.subHeading}>Started At The Age Of 17</h2>
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
                +7000{" "}
              </span>
              Lives Impacted Within 4 Months
            </p>
          </div>
        </Link>
        <Link href="https://www.qadirahygiene.com">
          <div className={styles.imgDiv}>
            <Image
              className={styles.imagelogo}
              src="/assets/hygiene.png"
              width="1080"
              height="381"
            />
            <h1 style={{ marginBottom: 0, marginTop: 30 }}>Qadira Hygiene</h1>
            <p style={{ marginTop: 0 }}>
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                  fontSize: "1.6rem",
                }}
              >
                200+
              </span>{" "}
              Happy Customers
            </p>
            <p style={{ marginTop: 0 }}>
              In
              <span
                style={{
                  fontWeight: "bolder",
                  color: "#000",
                  fontSize: "1.6rem",
                }}
              >
                {" "}
                2 Months
              </span>{" "}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default StartupJourney;
