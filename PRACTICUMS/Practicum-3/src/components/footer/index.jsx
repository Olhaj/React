import styles from "./styles.module.css";

function Footer({ theme }) {
  return (
    <footer className={`footer ${theme}`}>
      <div className={styles.footer_line}></div>
      <div className={styles.footer_link}>
        <a href="#">CopyRight</a>
        <a href="#">Links</a>
      </div>
    </footer>
  );
}

export default Footer;
