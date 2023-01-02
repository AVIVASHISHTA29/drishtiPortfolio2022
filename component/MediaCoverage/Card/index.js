import styles from "./styles.module.css";

function Card({ url }) {
  return (
    <div className={styles.card}>
      <div className={styles.site}>
        <iframe src={url} allowFullScreen className={styles.sites} />
      </div>
    </div>
  );
}

export default Card;
