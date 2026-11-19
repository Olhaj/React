import VacancyCard from "../vacancyCard";
import styles from "./styles.module.css";

function VacancyCardList() {
  return (
    <section className={styles.vacancy_section}>
      <h3>Новые вакансии</h3>
      <p>Найди работу своей мечты прямо сейчас</p>
      <VacancyCard />
      <button className={styles.vacancy_btn} type="submit">
        Все вакансии
      </button>
    </section>
  );
}

export default VacancyCardList;
