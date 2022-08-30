import styles from "../styles/Layout.module.css";

export default function PageLayout({children}) {
  return (
    <div className={styles.pageLayout}>
      <main>{children}</main>
    </div>
  );
}
