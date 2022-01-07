import Image from "next/image";
import styles from "./styles.module.css";
function SkillSet() {
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
        My Advantage
      </h1>
      <div className={styles.skillFlex}>
        <div>
          <div className={styles.skills}>
            <Image
              clasName={styles.imgLogo}
              src="/assets/xd.png"
              height="2400"
              width="2340"
            />
          </div>
          <h2 style={{ textAlign: "center", fontWeight: "lighter" }}>
            Adobe XD
          </h2>
        </div>
        <div>
          <div className={styles.skills}>
            <Image
              clasName={styles.imgLogo}
              src="/assets/html5.png"
              height="300"
              width="300"
            />
          </div>
          <h2 style={{ textAlign: "center", fontWeight: "lighter" }}>
            HTML5 & CSS
          </h2>
        </div>
        <div>
          <div className={styles.skills}>
            <Image
              clasName={styles.imgLogo}
              src="/assets/bootstrap.png"
              height="846"
              width="912"
            />
          </div>
          <h2 style={{ textAlign: "center", fontWeight: "lighter" }}>
            Bootstrap
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SkillSet;
