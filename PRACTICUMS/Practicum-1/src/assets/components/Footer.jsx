// 11. Создайте компонент "Footer", он послужит
// футером нашего сайта. На данном этапе
// оставим его содержимое пустым.

// function Footer() {
//     return (
//         <>
//         </>
//     );
// }

// export default Footer;
// =========================================

// 14. Завершите компонент "Footer", добавив
// в него компоненты "FooterText" и
// "FooterLinks"

import FooterLinks from "./FooterLinks";
import FooterText from "./FooterText";

function Footer() {
  return (
    <>
      <FooterText />
      <FooterLinks />
    </>
  );
}

export default Footer;
