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
        <p className={styles.navLinks} href="/">
          About
        </p>
        <p className={styles.navLinks} href="/">
          Projects
        </p>
        <p className={styles.navLinks} href="/">
          Skills
        </p>
        <p className={styles.navLinks} href="/">
          More
        </p>
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
