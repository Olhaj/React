// 15. Добавьте в компонент "App" компоненты
// "Header", "MainContent" и "Footer".
// Запустите проект, чтобы увидеть результат.

import Header from "./assets/components/Header";
import MainContent from "./assets/components/MainContent";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
