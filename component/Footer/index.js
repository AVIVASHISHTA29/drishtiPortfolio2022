import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <h1>2022 © Drishti Makhijani</h1>
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
    </div>
  );
}

export default Footer;
