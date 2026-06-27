import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <header className={styles.bar}>
      <span className={styles.brand}>nk <span className={styles.dot}>·</span></span>
      <span className={styles.tagline}>data engineering · analytics · ml</span>
    </header>
  );
}
