import TodoContext from "../../context";
import { useContext } from "react";
import styles from "./styles.module.css";

function TodoItem({ id, title, completed }) {
  const { todos, setTodos } = useContext(TodoContext);

  function toggleComplete() {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !completed };
        } else {
          return todo;
        }
      }),
    );
  }
  function deleteTodo() {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <li className={styles.todo_box_list}>
      <input
        className={styles.todo_checkbox}
        type="checkbox"
        onChange={toggleComplete}
        checked={completed}
      />
      <span
        className={styles.todo_text}
        style={{ textDecoration: completed ? "line-through" : null }}
      >
        {title}
      </span>
      <span className={styles.todo_delete} onClick={deleteTodo}>
        Delete
      </span>
    </li>
  );
}
export default TodoItem;
