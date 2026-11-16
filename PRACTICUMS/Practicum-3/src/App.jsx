import "./App.css";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import Tasks from "./components/tasks";
import { useState } from "react";

function App() {
  // Тема приложения при первом открытии — светлая
  const [theme, setTheme] = useState("light");

  const [tasks, setTasks] = useState(["task-1", "task-2"]);

  function addTask(newTask) {
    setTasks((oldTasks) => [...oldTasks, newTask]);
  }

  const [inputValue, setInputValue] = useState("");

  // Меняем тему на противоположную
  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onToggle={toggleTheme} />
      <MainContent theme={theme} />
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button onClick={() => addTask(inputValue)}>add Task</button>
      <Tasks tasks={tasks} addTask={addTask} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
