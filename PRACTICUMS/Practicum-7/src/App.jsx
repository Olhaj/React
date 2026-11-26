// import TodoProvider from "./components/todoProvider/index";
import "./App.css";
// import TodoForm from "./components/todoForm";
// import TodoList from "./components/todoList";

// Задание 1
// function App() {
//   return (
//     <TodoProvider>
//       <main className="todo_box">
//         <h1>My ToDo List</h1>
//         <TodoForm />
//         <TodoList />
//       </main>
//     </TodoProvider>
//   );
// }

// export default App;

import BlogSettingsProvider from "./components/blogSettingsProvider/index";
import SettingsPanel from "./components/settingsPanel/index";
import Article from "./components/article/index";

// Задание 2
function App() {
  return (
    <BlogSettingsProvider>
      <main className="blog-app">
        <SettingsPanel />
        <Article />
      </main>
    </BlogSettingsProvider>
  );
}

export default App;
