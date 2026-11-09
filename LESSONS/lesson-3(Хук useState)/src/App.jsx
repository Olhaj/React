// import { useState } from "react";
import "./App.css";
import Animals from "./components/animals";
// import CardsList from "./components/cardsList";

//!===================================
//!=======   На уроке  ===============
//!===================================

// function App() {
//   // let count = 0;

//   // function plusOne() {
//   //   count++;
//   //   console.log(count);
//   // }
//   const userData = {
//     name: "Alice",
//   };

//   console.log(userData);

//   const [count, setCount] = useState(0);

//   function plusOne() {
//     setCount(count + 1);
//   }

//   console.log("render app");

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={plusOne}>plus one</button>
//     </>
//   );
// }

// Реализуйте три кнопки:
// будет устанавливать значение счетчика на 0
// будет увеличивать значение счетчика на 1
// будет уменьшать значение счетчика на 1

// function App() {
//   const [count, setCount] = useState(0);

//   function reset() {
//     setCount(0);
//   }

//   function plusOne() {
//     setCount(count + 1);
//   }

//   function minusOne() {
//     setCount(count - 1);
//   }
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={reset}>reset</button>
//       <button onClick={plusOne}>plus one</button>
//       <button onClick={minusOne}>minus one</button>
//     </>
//   );
// }

// export default App;
// ===========================================

//?===========================================
//?============ Самостоятельно ===============
//?===========================================

// Задание

// Создать React приложение, которое будет отображать
// карточки футбольных команд. В каждой карточке должно
// содержаться название команды и список её участников.
// Каждая команда и ее участники должны быть выдуманы. Для
// этого потребуется определить компоненты, использовать
// JSX, props, метод map и создать внешние стили CSS.

// Входные данные
// const teams = [
//  {
//  name: 'Dragons United',
//  members: ['David Miller', 'Ethan Turner', 'Natalie Clark', 'Sophie Gomez', 'Tom Hanks']
//  },
//  {
//  name: 'Golden Eagles',
//  members: ['Lisa Ray', 'Harry Ford', 'Betty Cooper', 'George King', 'Alice Morgan']
//  },
//  {
//  name: 'Mighty Warriors',
//  members: ['Sam Wilson', 'John Norton', 'Emma Cartright', 'Daniel Lewis', 'Megan Stone']
//  },
//  {
//  name: 'Falcon Flyer',
//  members: ['Oscar Wilde', 'Robert Brown', 'Victoria Smith', 'Rachel Adams', 'Matthew Johns']
//  },
//  {
//  name: 'Storm Breakers',
//  members: ['Lucas White', 'Eva Taylor', 'Charles Anderson', 'Emily Johnson', 'Aaron Carter']
//  }
// ];

// Шаги реализации
// 1. Создайте новый проект с помощью Create React App, настройте его.
// 2. Помимо папки components создайте папку styles.
// 3. Компонент App должен содержать массив данных и передавать его посредством props компоненту
// CardsList.
// 4. Создайте функциональный компонент CardsList, который принимает props и передаёт их компоненту
// TeamCard.
// 5. Создайте функциональный компонент TeamCard, который будет содержать и отображать данные о
// каждой команде (название команды и массив участников).
// 6. Стилизуйте карточки - в папке styles создайте CSS файл TeamCard.css для стилей компонента.
// 7. Сделайте обводку со скругленными углами вокруг каждой карточки, задайте цвет фону карточки.
// 8. Стилизуйте список карточек - в папке styles создайте CSS файл CardsList.css для стилей компонента.
// 9. Расположите карточки вдоль экрана, добавьте отступы от краев.
// 10. Запустите приложение, проверьте результат.

// function App() {
//   const teams = [
//     {
//       name: "Dragons United",
//       members: [
//         "David Miller",
//         "Ethan Turner",
//         "Natalie Clark",
//         "Sophie Gomez",
//         "Tom Hanks",
//       ],
//     },
//     {
//       name: "Golden Eagles",
//       members: [
//         "Lisa Ray",
//         "Harry Ford",
//         "Betty Cooper",
//         "George King",
//         "Alice Morgan",
//       ],
//     },
//     {
//       name: "Mighty Warriors",
//       members: [
//         "Sam Wilson",
//         "John Norton",
//         "Emma Cartright",
//         "Daniel Lewis",
//         "Megan Stone",
//       ],
//     },
//     {
//       name: "Falcon Flyer",
//       members: [
//         "Oscar Wilde",
//         "Robert Brown",
//         "Victoria Smith",
//         "Rachel Adams",
//         "Matthew Johns",
//       ],
//     },
//     {
//       name: "Storm Breakers",
//       members: [
//         "Lucas White",
//         "Eva Taylor",
//         "Charles Anderson",
//         "Emily Johnson",
//         "Aaron Carter",
//       ],
//     },
//   ];

//   return (
//     <main>
//       <h1>Football Teams</h1>
//       {/* Передаём массив команд компоненту CardsList через props */}
//       <CardsList teams={teams} />
//     </main>
//   );
// }

// export default App;
// ?=======================================================

// Задание
// 1. Подготовьте проект к работе.
// 2. Создайте компонент Animals
// 3. Импортируйте необходимые зависимости в
// ваш компонент (хук useState).
// 4. Определите начальное состояние для
// списка животных. Используйте хук useState
// для создания состояния, которое будет
// хранить список выбранных животных.
// Изначально это должен быть пустой массив.
// 5. Создайте список имен животных. Запишите массив с названиями животных, которые будут
// использоваться для добавления в список через интерфейс.
// 6. Реализуйте функцию для добавления случайного животного в состояние. Создайте функцию, которая
// будет выбирать случайное животное из вашего списка имен животных. При выборе случайного
// индекса используйте Math.random и Math.floor для генерации индекса. Обновите состояние списка
// животных, добавив в него выбранное животное.
// 7. Добавьте кнопку для активации функции выбора животных. В return JSX вашего компонента добавьте
// кнопку. Установите onClick обработчик для этой кнопки, который будет вызывать вашу функцию
// добавления животного.
// 8. Отобразите текущий список животных. Используйте метод .map для оформления каждого элемента
// списка животных в виде элемента списка <li>. Убедитесь в наличии атрибута key у каждого элемента
// списка для оптимизации рендеринга React.
// 9. Импортируйте получившийся компонент в App.
// 10. Запустите ваше приложение и проверьте функциональность кнопки. Убедитесь, что при каждом
// нажатии на кнопку в список добавляется случайное животное.

function App() {
  return (
    <main>
      <h1>Список животных</h1>
      {/* Показываем компонент со списком и кнопкой */}
      <Animals />
    </main>
  );
}

export default App;
