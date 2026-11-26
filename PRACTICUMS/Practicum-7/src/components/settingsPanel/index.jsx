import { useBlogSettings } from "../../context/blogSettingsContext";
import styles from "./styles.module.css";

function SettingsPanel() {
  // Получаем текущие настройки и функции их изменения из контекста
  const { fontSize, setFontSize, lineHeight, setLineHeight } =
    useBlogSettings();

  return (
    <section className={styles.panel}>
      <h2>Settings</h2>

      <label className={styles.control}>
        Font Size:
        <select
          value={fontSize}
          onChange={(event) => setFontSize(Number(event.target.value))}
        >
          <option value="16">16 px</option>
          <option value="18">18 px</option>
          <option value="20">20 px</option>
          <option value="24">24 px</option>
        </select>
      </label>

      <label className={styles.control}>
        Line Height:
        <select
          value={lineHeight}
          onChange={(event) => setLineHeight(Number(event.target.value))}
        >
          <option value="1.2">1.2</option>
          <option value="1.5">1.5</option>
          <option value="1.8">1.8</option>
          <option value="2">2</option>
        </select>
      </label>
    </section>
  );
}

export default SettingsPanel;
