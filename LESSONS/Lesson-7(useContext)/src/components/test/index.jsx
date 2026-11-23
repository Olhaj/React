import { useContext } from "react";
import GlobalContext from "../context";

function Test() {
  // Читаем значение из ближайшего выше по дереву GlobalContext.Provider
  const data = useContext(GlobalContext);

  // Выводим объект контекста в консоль браузера
  // Так можно посмотреть, какие данные получил компонент
  console.log(data);

  return (
    <div>
      <h3>Test component</h3>
      {/* Показываем имя, полученное из контекста */}
      <p>User name: {data.name}</p>
    </div>
  );
}

export default Test;

// useContext(GlobalContext) возвращает объект,
// который передан в value у GlobalContext.Provider.
// В твоём App это { value, name, setName },
// поэтому data.name содержит "Alice".
