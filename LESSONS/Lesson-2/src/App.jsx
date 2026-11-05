// import FruitsList from "./components/FruitsList";

// function App() {
//   const userId = 12356656; // передаем в h1 значение переменной userId

//   const url = "https://www.example.com"; // передаем в атрибут href значение переменной url
//   const linkTitle = "Web Site"; // передаем в атрибут title значение переменной linkTitle

//   function foo(number) {
//     // создаем функцию foo, которая принимает параметр number
//     return "Render" + number; // функция возвращает строку "Render" + значение переменной number
//   }

//   return (
//     <div>
//       <h1>User ID: {userId}</h1>
//       <h2>Age: {20 + 2}</h2>
//       <a href={url}>{linkTitle}</a>
//       {/* так мы можем вызвать функцию и отобразить ее
//       результат в компоненте */}
//       <h3>{foo(1)}</h3>
//       <h3>{foo(2)}</h3>
//       <h3>{foo(999)}</h3>
//       <FruitsList />
//     </div>
//   );
// }

// export default App;

// function App() {
//   const userData = {
//     name: "John Doe",
//     age: 30,
//   };

//   return (
//     <>
//       <h1>User name: {userData.name}</h1> // передаем в h1 значение свойства
//       name объекта userData
//       <h2>User age: {userData.age}</h2> // передаем в h2 значение свойства age
//       объекта userData
//     </>
//   );
// }

// export default App;

// в компонент App передаем в компонент Button значения свойств a, b и g с помощью props
// function App() {
//   return (
//     <>
//       <Button a={3} b={"hello"} g={[1, 2, 3]} />
//       <Button h={4} e={{ a: 3 }} />
//       <Button />
//     </>
//   );
// }

// export default App;

import Button from "./components/Button";
// в компонент App передаем в компонент Button значения свойства title с помощью props
function App() {
  // создаем массив объектов menuList, каждый объект содержит свойства id, title и bgColor
  const menuList = [
    { id: 1, title: "Home", bgColor: "yellow" },
    { id: 2, title: "About", bgColor: "orange" },
    { id: 3, title: "Contact", bgColor: "purple" },
  ];

  return (
    <>
      {/* передаем в компонент Button значение свойства title и bgColor */}
      {/* <Button title={"Click me"} bgColor={"red"} /> 
      <Button title={"Login"} bgColor={"green"} />
      <Button title={"Register"} /> */}

      <ul>
        {/* используем метод map для перебора массива menuList и создаем компонент Button для каждого объекта в массиве */}
        {menuList.map(({ id, title, bgColor }) => {
          return <Button key={id} title={title} bgColor={bgColor} />; // передаем в компонент Button значение свойства title и bgColor из объекта menuList
        })}
      </ul>
    </>
  );
}

export default App;
