import styles from "./styles.module.css";
import CategoryCard from "../categoryCard";

function CategoryCardList() {
  return (
    <section className={styles.category_section}>
      <h3>
        Работа
        <br /> по категориям
      </h3>
      <CategoryCard />
    </section>
  );
}

export default CategoryCardList;
