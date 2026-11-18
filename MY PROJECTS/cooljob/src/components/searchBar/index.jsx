import styles from "./styles.module.css";

import search from "../../assets/icons/search.svg";
import location from "../../assets/icons/location.svg";
import rectangle from "../../assets/icons/Rectangle 12.svg";
import disney from "../../assets/icons/disney.svg";
import facebook from "../../assets/icons/facebook_text.svg";
import microsoft from "../../assets/icons/microsoft.svg";
import sony from "../../assets/icons/sony.svg";
import cocaCola from "../../assets/icons/coca_cola.svg";

function SearchBar() {
  return (
    <>
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

      <section className={styles.companies_content}>
        <h3>Помогаем найти работу:</h3>
        <div className={styles.companies_container}>
          <img src={disney} alt="Disney logo" />
          <img src={facebook} alt="Facebook logo" />
          <img src={microsoft} alt="Microsoft logo" />
          <img src={sony} alt="Sony logo" />
          <img src={cocaCola} alt="Coca-Cola logo" />
        </div>
      </section>
    </>
  );
}

export default SearchBar;
