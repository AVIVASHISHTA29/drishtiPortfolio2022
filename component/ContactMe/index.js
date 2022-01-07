import Link from "next/link";
import styles from "./styles.module.css";

function ContactMe() {
  return (
    <div className={styles.container} id="contactme">
      <div className={styles.circularDiv}>
        <h1>Lets get in touch</h1>
        <Link href="mailto:drishtimakhijani01@gmail.com">
          <p>Call Drishti</p>
        </Link>
        <svg
          className={styles.arrowSvg}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          style={{ height: "4rem", margin: 50, marginTop: "10px" }}
          viewBox="0 0 17 17"
        >
          <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z"></path>
        </svg>
      </div>
    </div>
  );
}

export default ContactMe;
