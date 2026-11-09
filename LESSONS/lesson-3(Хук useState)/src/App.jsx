import { useState } from "react";
import "./App.css";

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

function App() {
  const [count, setCount] = useState(0);

  function reset() {
    setCount(0);
  }

  function plusOne() {
    setCount(count + 1);
  }

  function minusOne() {
    setCount(count - 1);
  }
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={reset}>reset</button>
      <button onClick={plusOne}>plus one</button>
      <button onClick={minusOne}>minus one</button>
    </>
  );
}

export default App;
