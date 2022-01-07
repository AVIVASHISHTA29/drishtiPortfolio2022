import Link from "next/link";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Link href="/#aboutme">
          <p className={styles.navLinks}>About</p>
        </Link>
        <Link href="/#projects">
          <p className={styles.navLinks}>Projects</p>
        </Link>
        <Link href="/#achievments">
          <p className={styles.navLinks}>Experience</p>
        </Link>
        <Link href="/#contactme">
          <p className={styles.navLinks}>Contact Me</p>
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <Link href="/">
          <FontAwesomeIcon
            className={styles.navLinks2}
            icon={faInstagram}
            style={{ fontSize: "1.3rem" }}
          />
        </Link>
        <Link href="/">
          <FontAwesomeIcon
            className={styles.navLinks2}
            icon={faFacebook}
            style={{ fontSize: "1.3rem" }}
          />
        </Link>
        <Link href="/">
          <FontAwesomeIcon
            className={styles.navLinks2}
            icon={faLinkedin}
            style={{ fontSize: "1.3rem" }}
          />
        </Link>
        <Link href="/">
          <FontAwesomeIcon
            className={styles.navLinks2}
            icon={faGoogle}
            style={{ fontSize: "1.3rem" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
