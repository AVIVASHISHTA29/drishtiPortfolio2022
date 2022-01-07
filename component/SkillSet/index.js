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
              src="/assets/figma.png"
              height="112.5"
              width="75"
            />
            <h1>80%</h1>
          </div>
          <h2 style={{ textAlign: "center", fontWeight: "lighter" }}>Figma</h2>
        </div>
        <div>
          <div className={styles.skills}>
            <Image
              clasName={styles.imgLogo}
              src="/assets/figma.png"
              height="112.5"
              width="75"
            />
            <h1>80%</h1>
          </div>
          <h2 style={{ textAlign: "center", fontWeight: "lighter" }}>Figma</h2>
        </div>
        <div>
          <div className={styles.skills}>
            <Image
              clasName={styles.imgLogo}
              src="/assets/figma.png"
              height="112.5"
              width="75"
            />
            <h1>80%</h1>
          </div>
          <h2 style={{ textAlign: "center", fontWeight: "lighter" }}>Figma</h2>
        </div>
        <div>
          <div className={styles.skills}>
            <Image
              clasName={styles.imgLogo}
              src="/assets/figma.png"
              height="112.5"
              width="75"
            />
            <h1>80%</h1>
          </div>
          <h2 style={{ textAlign: "center", fontWeight: "lighter" }}>Figma</h2>
        </div>
      </div>
    </div>
  );
}

export default SkillSet;
