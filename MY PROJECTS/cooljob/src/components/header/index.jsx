import styles from "./styles.module.css";
import cooljob from "../../assets/icons/cooljob.svg";

function Header() {
  return (
    <header id="top" className={styles.top_bar}>
      <a className={styles.header_logo} href="#">
        <img src={cooljob} alt="Logo" />
      </a>

      <div className={styles.menu_nav}>
        <a href="#">Поиск работы</a>
        <a href="#">Поиск стартапов</a>
      </div>

      <div className={styles.account}>
        <a className={styles.register} href="#">
          Регистрация
        </a>
        <a className={styles.login} href="#">
          Вход
        </a>
      </div>
    </header>
  );
}

export default Header;
