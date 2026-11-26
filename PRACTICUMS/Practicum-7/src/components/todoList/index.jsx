import TodoContext from "../../context";
import { useContext } from "react";
import TodoItem from "../todoItem";
import styles from "./styles.module.css";

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <ul className={styles.todo_list}>
      {todos.map((todo) => {
        // это длинная запись
        // return <TodoItem key={todo.id} id={todo.id} title={todo.title} />;
        // это короче запись
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
}
export default TodoList;
