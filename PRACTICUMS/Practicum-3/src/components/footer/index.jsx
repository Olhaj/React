import styles from "./styles.module.css";

function Footer(props) {
  return (
    <footer className={`footer ${props.theme}`}>
      <div className={styles.footer_line}></div>
      <div className={styles.footer_link}>
        <a href="#">CopyRight</a>
        <a href="#">Links</a>
      </div>
    </footer>
  );
}

export default Footer;
