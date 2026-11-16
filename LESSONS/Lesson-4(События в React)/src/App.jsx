import { useState } from "react";
import "./App.css";

// function App() {
//   const items = ["First", "Second", "Third"];

//   function handleClick(item) {
//     console.log("Crrent clicked element:", item);
//   }

//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => {
//           return (
//             <li key={index} onClick={() => handleClick(item)}>
//               {item}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;

function App() {
  //? Пример обработчика нажатия клавиши.
  // const handleKeyDown = () => {
  //? Выводит сообщение в консоль при срабатывании обработчика.
  //   console.log("Key unpressed");
  // }

  //? Отдельное состояние для имени пользователя.
  // const [name, setName] = useState("");

  //? Отдельное состояние для пароля.
  // const [password, setPassword] = useState();

  //* Сохраняем значения полей формы в одном объекте.
  const [formData, setFormData] = useState({ name: "", password: "" });

  //* Храним результат проверки имени и текст подсказки.
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");

  //? Отдельный обработчик изменения поля имени.
  // function handleChange(event) {
  //? Сохраняет введённое значение в состоянии name.
  //   setName(event.target.value);
  // }

  //? Отдельный обработчик изменения поля пароля.
  // function passwordChange(event) {
  //? Сохраняет введённое значение в состоянии password.
  //   setPassword(event.target.value)
  // }

  //* Вызывается при изменении любого поля формы.
  function handleChange(event) {
    // Берём имя поля и введённое в него значение.
    const { value, name } = event.target;

    // Выводит в консоль значение поля и его имя.
    console.log(value, name);

    // Обновляет соответствующее поле в объекте formData.
    setFormData({ ...formData, [name]: value });

    //* Проверяет длину введённого значения.
    if (value.length < 2) {
      setIsValid(false);
      //* Показывает сообщение, если введено меньше двух символов.
      setMessage("User name should be at than 2 letters");
    } else {
      setIsValid(true);
      //* Показывает сообщение, если введено два символа или больше.
      setMessage("Name is valid!");
    }
  }

  // Вызывается при отправке формы.
  function handelSubmit(event) {
    // Не даём браузеру перезагрузить страницу.
    event.preventDefault();

    // Выводим данные формы в консоль.
    console.log(formData);
  }

  return (
    <div>
      {/* Примеры обработчиков разных событий мыши. */}

      {/* При клике выводит сообщение в консоль. */}
      {/* <h1 onClick={() => console.log("Click")}>Click</h1> */}

      {/* При двойном клике выводит сообщение в консоль. */}
      {/* <h1 onDoubleClick={() => console.log("Double Click")}>Double Click</h1> */}

      {/* При нажатии и отпускании кнопки мыши выводит сообщения в консоль. */}
      {/* <h1
        onMouseDown={() => console.log("Mouse pressed")}
        onMouseUp={() => console.log("Mouse unpressed")}
      >
        Mouse
      </h1> */}

      {/* Когда курсор входит в элемент или выходит из него, выводит сообщение. */}
      {/* <h1
        onMouseOver={() => console.log("Mouse over")}
        onMouseOut={() => console.log("Mouse out")}
      >
        Mouse
      </h1> */}

      {/* При движении курсора над элементом выводит сообщение в консоль. */}
      {/* <h1 onMouseMove={() => console.log("Mouse move")}>Mouse move</h1> */}

      {/* Поле ввода, которое вызывает handleKeyDown при нажатии клавиши. */}
      {/* <input type="text" onKeyDown={() => handleKeyDown()}/> */}

      <form onSubmit={handelSubmit}>
        {/* Поле имени пользователя. Значение хранится в formData.name. */}
        <input
          type="text"
          placeholder="User name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        {/* Поле пароля. Значение хранится в formData.password. */}
        <input
          type="password"
          placeholder="User password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Показываем сообщение о проверке; цвет зависит от isValid. */}
        <p style={{ color: isValid ? "green" : "red" }}>{message}</p>

        {/* Отправляет форму и вызывает handleSubmit. */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
