import "./styles.module.css";

function ThemeSwitcher({ theme, onToggle }) {
  return (
    <button className={`theme ${theme}`} onClick={onToggle}>
      Switch <br /> Theme
    </button>
  );
}

export default ThemeSwitcher;
