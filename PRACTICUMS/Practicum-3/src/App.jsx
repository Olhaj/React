import "./App.css";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
import { useState } from "react";

function App() {
  // Тема приложения при первом открытии — светлая
  const [theme, setTheme] = useState("light");

  // Меняем тему на противоположную
  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onToggle={toggleTheme} />
      <MainContent theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
