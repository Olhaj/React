import styles from "./styles.module.css";

import search from "../../assets/icons/search.svg";
import location from "../../assets/icons/location.svg";
import rectangle from "../../assets/icons/Rectangle 12.svg";

function SearchBar() {
  return (
    <section className={styles.hero_content}>
      <h1>
        Один клик
        <br />и работа в кармане
      </h1>

      <form className={styles.container_search}>
        <label className={styles.search_input_wrapper}>
          <img src={search} alt="Search icon" />
          <input
            type="text"
            name="search"
            placeholder="Должность или компания"
            aria-label="Должность или компания"
          />
        </label>
        <div className={styles.line}></div>
        <label className={styles.location_input_wrapper}>
          <img src={location} alt="Location icon" />
          <input
            type="text"
            name="location"
            placeholder="Город, Страна"
            aria-label="Город, страна"
          />
        </label>

        <button className={styles.search_btn} type="submit">
          Поиск
        </button>
      </form>
      <img className={styles.search_bar_img} src={rectangle} alt="" />
    </section>
  );
}

export default SearchBar;
