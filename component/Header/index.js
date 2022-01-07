import Link from "next/link";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

import DrawerComponent from "./DrawerComponent";
import { useEffect, useState } from "react";
function Header() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 800) {
        setOpen(false);
      }
    }
  }, []);

  if (process.browser) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 800) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }

  return (
    <div className={styles.container}>
      {open && (
        <>
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
            <Link href="https://instagram.com/_drishti.makhijani?utm_medium=copy_link">
              <FontAwesomeIcon
                className={styles.navLinks2}
                icon={faInstagram}
                style={{ fontSize: "1.3rem" }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/drishti-makhijani-3418661b4">
              <FontAwesomeIcon
                className={styles.navLinks2}
                icon={faLinkedin}
                style={{ fontSize: "1.3rem" }}
              />
            </Link>
            <Link href="mailto:drishtimakhijani01@gmail.com">
              <FontAwesomeIcon
                className={styles.navLinks2}
                icon={faGoogle}
                style={{ fontSize: "1.3rem" }}
              />
            </Link>
          </div>
        </>
      )}
      {!open && <DrawerComponent />}
    </div>
  );
}

export default Header;
