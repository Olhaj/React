// 5. Создайте компонент "MainContent", который будет
// содержать основной контент страницы, но пока
// оставьте его пустым.

// function MainContent() {
//   return (
//     <>
//     </>
//   );
// }

// export default MainContent;
//============================================

// 10. Внутри компонента "MainContent" добавьте
// компонент "Text", компонент "Lists",
// несколько экземпляров компонента
// "Pictures" и компонент "LinkButton"

import Text from "./Text";
import Lists from "./Lists";
import Pictures from "./Pictures";
import LinkButton from "./LinkButton";

function MainContent() {
  return (
    <>
      <Text />
      <Lists />
      <Lists />
      <Pictures />
      <Pictures />
      <LinkButton />
    </>
  );
}

export default MainContent;
