import { useState, useContext } from "react";
import TodoContext from "../../context/index";
import styles from "./styles.module.css";

function TodoForm() {
  const [title, setTitle] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Math.random(), title, completed: false }]);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todo_form}>
      <input
        className={styles.todo_input}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="Add a new task"
      />
      <button className={styles.todo_btn} type="submit">
        Add todo
      </button>
    </form>
  );
}

export default TodoForm;
