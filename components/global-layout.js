import styles from "../styles/Layout.module.css";

export default function GlobalLayout({ children }) {
  return (
    <div className={styles.globalLayout}>
      <main>{children}</main>
      <footer>Global layout footer</footer>
    </div>
  );
}
