import styles from "./styles.module.css";

import location from "../../assets/icons/location_gray.svg";
import sony from "../../assets/icons/sony_black.svg";
import facebook from "../../assets/icons/facebook_blue.svg";
import coca_cola from "../../assets/icons/coca_cola_red.svg";

function VacancyCard() {
  const newVacancy = [
    {
      id: 1,
      color: "#5182ff",
      category: "Финансы",
      title: "Менеджер по управлению финансами в крупной компании",
      icon: location,
      geolocation: "Осака, Япония",
      image: sony,
      data: "Sony, 3 дня назад",
    },
    {
      id: 2,
      color: "#ff51ee",
      category: "Продажи",
      title: "Специалист по продажам",
      icon: location,
      geolocation: "Коясан, Япония",
      image: facebook,
      data: "Facebook, 7 дней назад",
    },
    {
      id: 3,
      color: "#58D94D",
      category: "Служба поддержки",
      title: "Оператор колл центра",
      icon: location,
      geolocation: "Томаму, Япония",
      image: coca_cola,
      data: "CocaCola, 1 день назад",
    },
    {
      id: 4,
      color: "#FF9051",
      category: "Мультимедиа",
      title: "Системный администратор",
      icon: location,
      geolocation: "Токио, Япония",
      image: sony,
      data: "Sony, 3 дня назад",
    },
    {
      id: 5,
      color: "#F84242",
      category: "Дизайн",
      title: "Дизайнер интерьера в профессиональную студию в центре города",
      icon: location,
      geolocation: "Йокогама, Япония",
      image: facebook,
      data: "Facebook, 7 дней назад",
    },
    {
      id: 6,
      color: "#383838",
      category: "Грузоперевозки",
      title: "Водитель на дальние дистанции",
      icon: location,
      geolocation: "Кобе. Япония",
      image: coca_cola,
      data: "CocaCola, 1 день назад",
    },
  ];

  return (
    <div className={styles.vacancy_card}>
      {newVacancy.map((vacancy) => {
        return (
          <div className={styles.vacancy_box} key={vacancy.id} {...vacancy}>
            <div className={styles.vacancy_dot}>
              <div
                className={styles.dot}
                style={{
                  backgroundColor: vacancy.color,
                  borderColor: vacancy.color,
                }}
              ></div>
              <span>{vacancy.category}</span>
            </div>
            <h4>{vacancy.title}</h4>
            <div className={styles.vacancy_location}>
              <img src={vacancy.icon} alt="icon" />
              <span>{vacancy.geolocation}</span>
            </div>
            <div className={styles.vacancy_data}>
              <img src={vacancy.image} alt="image" />
              <span>{vacancy.data}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VacancyCard;
