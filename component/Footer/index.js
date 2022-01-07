import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <h1>2022 © Drishti Makhijani</h1>
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

export default Footer;
