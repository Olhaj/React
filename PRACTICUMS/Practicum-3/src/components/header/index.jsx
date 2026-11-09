import ThemeSwitcher from "../themeSwitcher";
import styles from "./styles.module.css";

function Header({ theme, onToggle }) {
  return (
    <header className={`header ${theme}`}>
      <div className={styles.header_container}>
        <h3 className={styles.header_title}>ThemeSwitcher:</h3>
        <ThemeSwitcher theme={theme} onToggle={onToggle} />
      </div>
      <div className={styles.header_line}></div>
    </header>
  );
}

export default Header;
