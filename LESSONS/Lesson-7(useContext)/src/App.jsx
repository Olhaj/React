// import { useState } from "react";
// import "./App.css";
// import GlobalContext from "./components/context";
// import Test from "./components/test";

// function App() {
//   // Создаём состояние value со значением "hello".
//   // setValue — функция для изменения этого значения.
//   const [value, setValue] = useState("hello");

//   // Создаём состояние name со значением "Alice".
//   // setName — функция для изменения имени.
//   const [name, setName] = useState("Alice");
//   return (
//     // Provider делает переданные данные доступными компонентам внутри него
//     <GlobalContext.Provider value={{ value, name, setName }}>
//       {/* Test находится внутри Provider и может читать переданные данные */}
//       <Test />
//     </GlobalContext.Provider>
//   );
// }

// export default App;

// function App() {
//   return (
//     // Container — родительский компонент для трёх частей страницы
//     <Container>
//       <Header />
//       <Main />
//       <Footer />
//     </Container>
//   );
// }

// export default App;

// function Container({ children }) {
//   // children — всё, что записано между открывающим и закрывающим тегами Container
//   return <div>{children}</div>;
// }

// function Header() {
//   return <h1>Header</h1>;
// }
// function Main() {
//   return <h1>Main</h1>;
// }
// function Footer() {
//   return <h1>Footer</h1>;
// }

// import Counter from "./components/context";
// import CustomProvider from "./components/provider";

// function App() {
//   console.log("render app");

//   return (
//     <CustomProvider>
//       <Counter />
//     </CustomProvider>
//   );
// }

// export default App;

import PostsList from "./components/postsList";
import PostsProvider from "./components/postsProvider/index";
import styles from "./app.module.css";

function App() {
  return (
    <PostsProvider>
      <main className={styles.container_posts}>
        <h1 className={styles.title_posts}>Посты</h1>
        <PostsList />
      </main>
    </PostsProvider>
  );
}
export default App;
