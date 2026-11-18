import styles from "./styles.module.css";
import cooljob from "../../assets/icons/cooljob.svg";

function Header() {
  return (
    <main className={styles.hero}>
      <header className={styles.top_bar}>
        <a href="#">
          <img src={cooljob} alt="Logo" />
        </a>

        <nav className={styles.nav_link}>
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
        </nav>
      </header>
    </main>
  );
}

export default Header;
