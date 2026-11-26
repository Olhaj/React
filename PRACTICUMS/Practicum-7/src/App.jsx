import TodoProvider from "./components/todoProvider/index";
import "./App.css";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  return (
    <TodoProvider>
      <main className="todo_box">
        <h1>My ToDo List</h1>
        <TodoForm />
        <TodoList />
      </main>
    </TodoProvider>
  );
}

export default App;
