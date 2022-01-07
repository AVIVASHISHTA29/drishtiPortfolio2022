import Link from "next/link";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
            <Link href="https://instagram.com/_drishti.makhijani">
              <InstagramIcon
                className={styles.navLinks2}
                style={{ fontSize: "1.5rem" }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/drishti-makhijani-3418661b4">
              <LinkedInIcon
                className={styles.navLinks2}
                style={{ fontSize: "1.5rem" }}
              />
            </Link>
            <Link href="mailto:drishtimakhijani01@gmail.com">
              <MailIcon
                className={styles.navLinks2}
                style={{ fontSize: "1.5rem" }}
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
