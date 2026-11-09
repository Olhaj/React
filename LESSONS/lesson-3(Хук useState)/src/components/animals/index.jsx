import { useState } from "react";
import styles from "./styles.module.css";

function Animals() {
  // Животные, из которых кнопка будет выбирать случайное
  const animalOptions = [
    {
      animal: "Dog",
      name: "Dik",
    },
    {
      animal: "Cat",
      name: "Doni",
    },
    {
      animal: "Turtle",
      name: "Riki",
    },
    {
      animal: "Parrot",
      name: "Cache",
    },
    {
      animal: "Rabbit",
      name: "Piglet",
    },
    {
      animal: "Bear",
      name: "Winnie the Pooh",
    },
  ];

  // Здесь будет список уже выбранных животных
  const [list, setList] = useState([]);

  function addRandomAnimal() {
    // Получаем случайный индекс от 0 до последнего индекса массива
    const randomIndex = Math.floor(Math.random() * animalOptions.length);

    // Берём животное по этому индексу
    const selectedAnimal = animalOptions[randomIndex];

    // Добавляем его в список, сохраняя предыдущие выбранные значения
    setList((currentList) => [...currentList, selectedAnimal]);
  }

  function removeAnimal(indexToRemove) {
    // Оставляем в списке все элементы, кроме выбранного по индексу
    setList((currentList) =>
      currentList.filter((_, index) => index !== indexToRemove),
    );
  }

  return (
    <div>
      <ul>
        {/* Создаём пункт списка для каждого выбранного животного */}
        {list.map((item, index) => (
          <li key={`${item.animal}-${index}`}>
            {item.animal}: {item.name}
            <button
              className={styles.btn_list}
              onClick={() => removeAnimal(index)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
      {/* По нажатию запускаем функцию случайного выбора */}
      <button className={styles.btn} onClick={addRandomAnimal}>
        Добавить животное
      </button>
    </div>
  );
}

export default Animals;
