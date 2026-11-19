import styles from "./styles.module.css";

import finance from "../../assets/icons/finance.svg";
import car from "../../assets/icons/car.svg";
import design from "../../assets/icons/design.svg";
import restaurant_business from "../../assets/icons/restaurant_business.svg";
import medicine from "../../assets/icons/medicine.svg";
import multimedia from "../../assets/icons/multimedia.svg";
import customer_support from "../../assets/icons/customer_support.svg";
import management from "../../assets/icons/management.svg";
import sales from "../../assets/icons/sales.svg";
import more_categories from "../../assets/icons/arrow_to_the_right.svg";

function CategoryCard() {
  const categories = [
    { id: 1, title: "Финансы", icon: finance },
    { id: 2, title: "Грузоперевозки", icon: car },
    { id: 3, title: "Дизайн", icon: design },
    { id: 4, title: "Ресторанный бизнес", icon: restaurant_business },
    { id: 5, title: "Медицина", icon: medicine },
    { id: 6, title: "Мультимедиа", icon: multimedia },
    { id: 7, title: "Служба поддержки", icon: customer_support },
    { id: 8, title: "Менеджмент", icon: management },
    { id: 9, title: "Продажи", icon: sales },
    { id: 10, title: "Больше категорий", icon: more_categories },
  ];

  return (
    <div className={styles.categories_card}>
      {categories.map((category) => {
        return (
          <div className={styles.categories_box} key={category.id}>
            <img src={category.icon} alt="icon" />
            <p>{category.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCard;
