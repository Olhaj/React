import GlobalContext from "./index";
import { useContext } from "react";

function Counter() {
  const { count, increment, decrement, reset } = useContext(GlobalContext);

  console.log("render counter");

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Counter;
