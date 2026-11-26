import { useState } from "react";
import TodoContext from "../../context/index";

function Provider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: "First Task", completed: false },
    { id: 2, title: "Seconds Task", completed: false },
    { id: 3, title: "Third Task", completed: true },
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
}

export default Provider;
