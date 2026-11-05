React Практикум 1

Понятный конспект: компоненты, JSX и сборка страницы

В практикуме собираем простую страницу о кошках из небольших частей: шапки, основного содержимого и подвала. Главная идея React: интерфейс удобно делить на компоненты, а затем вкладывать их друг в друга.

ГЛАВНОЕ Компонент — функция, которая возвращает JSX (разметку интерфейса). Имя компонента пишут с большой буквы, например Header.

ЦВЕТА В КОНСПЕКТЕ Зелёный — запомнить; синий — пояснение; жёлтый — частая ошибка или совет.

1. Три понятия перед началом

Компонент

Самостоятельная часть страницы. В этом задании компонентами будут Header, MainContent и Footer, а внутри них — более мелкие детали.

JSX

Похожая на HTML-разметка, которую пишут прямо в JavaScript. В JSX атрибут class называется className, потому что class зарезервировано в JavaScript.

Импорт и экспорт

export default отдаёт компонент из файла, а import получает его в другом файле. Обычно один компонент хранится в одноимённом файле.

function Header() {
return <div className="Header"></div>;
}

export default Header;

ПРОСТО Представь конструктор: сначала делаешь отдельные детали, затем собираешь их в более крупные блоки.

2. Шапка сайта

Шапка (Header) будет содержать название проекта и логотип. Каждый элемент — отдельный компонент, который можно переиспользовать.

Заголовок и логотип

function HeaderTitle() {
return <h1 className="HeaderTitle">Мой проект о кошках</h1>;
}
export default HeaderTitle;

function HeaderLogo() {
return (
<img
      className="HeaderLogo"
      src="/images/logo.png"
      alt="Логотип проекта"
      width={50}
      height={50}
    />
);
}
export default HeaderLogo;

ПОЯСНЕНИЕ src указывает путь к картинке, alt описывает её для доступности и на случай, если картинка не загрузится. Размеры в JSX можно задать числом: width={50}.

Собираем Header

import HeaderTitle from './HeaderTitle.js';
import HeaderLogo from './HeaderLogo.js';

function Header() {
return (
<header className="Header">
<HeaderTitle />
<HeaderLogo />
</header>
);
}
export default Header;

ВАЖНО Чтобы использовать компонент в другом файле, сначала экспортируй его, затем импортируй по правильному пути. Имена файлов и пути должны совпадать с проектом.

3. Основное содержимое

MainContent — контейнер для центральной части страницы. Внутри будут текст, списки, изображения и ссылка-кнопка.

Текст и абзацы

function Text() {
return (
<div className="Text">
<p>Кошки хорошо слышат высокие звуки.</p>
<p>Мяуканьем кошки часто общаются с людьми.</p>
<p>У каждой кошки свой характер.</p>
</div>
);
}
export default Text;

Тег <p> создаёт абзац. В примере исходника были длинные строки с <br />. Перенос строки обычно лучше поручить ширине блока и стилям; <br /> используй, когда перенос нужен именно по смыслу.

Упорядоченный и обычный список

function Lists() {
return (
<div className="Lists">
<ol>
<li>Сиамская кошка</li>
<li>Персидская кошка</li>
</ol>
<ul>
<li>Мейн-кун</li>
<li>Сфинкс</li>
</ul>
</div>
);
}
export default Lists;

ЗАПОМНИ ol показывает нумерованный список, ul — маркированный, li — отдельный пункт списка. В исходном задании нужно добавить по пять пунктов в каждый список.

Картинки

function Pictures() {
return (
<div className="Pictures">
<img src="/images/cat-1.jpg" alt="Котёнок смотрит вверх" />
<img src="/images/cat-2.jpg" alt="Котёнок дома" />
<img src="/images/cat-3.jpg" alt="Котёнок в пледе" />
</div>
);
}
export default Pictures;

Картинки лучше хранить в папке проекта, например public/images. В исходном конспекте использованы длинные внешние адреса: такие ссылки могут перестать работать.

Кнопка-ссылка

function LinkButton() {
return (
<a className="LinkButton" href="https://en.wikipedia.org/wiki/Cat">
Читать о кошках
</a>
);
}
export default LinkButton;

ПОПРАВКА К ИСХОДНИКУ Не вкладывай <button> внутрь <a>, если ссылка просто должна вести на другую страницу. Стилизуй саму ссылку как кнопку через CSS.

4. Собираем MainContent

import Text from './Text.js';
import Lists from './Lists.js';
import Pictures from './Pictures.js';
import LinkButton from './LinkButton.js';

function MainContent() {
return (
<main className="MainContent">
<Text />
<Lists />
<Pictures />
<LinkButton />
</main>
);
}
export default MainContent;

В исходном задании Pictures добавлялся три раза. Если компонент уже показывает три изображения, одного <Pictures /> достаточно. Если нужно повторить весь блок три раза — можно оставить три экземпляра.

5. Подвал сайта

Footer (подвал) обычно содержит краткую подпись и полезные ссылки, например на соцсети.

function FooterText() {
return <p>Учебный проект о кошках</p>;
}
export default FooterText;

function FooterLinks() {
return (
<div className="FooterLinks">
<a href="https://www.instagram.com/" aria-label="Instagram">
Instagram
</a>
</div>
);
}
export default FooterLinks;

import FooterText from './FooterText.js';
import FooterLinks from './FooterLinks.js';

function Footer() {
return (
<footer className="Footer">
<FooterText />
<FooterLinks />
</footer>
);
}
export default Footer;

СЕМАНТИЧЕСКИЕ ТЕГИ Для шапки, главного содержимого и подвала используй header, main и footer. Они обозначают роль частей страницы. Обычный div тоже работает, но не объясняет смысл блока.

6. Собираем всё в App

import Header from './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';

function App() {
return (
<div className="App">
<Header />
<MainContent />
<Footer />
</div>
);
}
export default App;

App — верхний компонент страницы. Он включает три больших блока, а те, в свою очередь, включают более мелкие компоненты.

7. Как читать JSX

<Компонент />

Такая запись вставляет компонент в разметку. Название начинается с большой буквы. Для HTML-элементов используются строчные буквы: <div>, <p>, <img>.

<img src="/images/cat.jpg" alt="Кот" />

Элемент img не имеет закрывающего тега; в JSX он заканчивается на />. То же правило относится к <br />.

ЧАСТАЯ ОШИБКА В каждом компоненте должен быть один корневой элемент. Если надо вернуть соседние элементы, оберни их в div, main, header или фрагмент <>...</>.

8. Порядок работы и самопроверка

Создай компоненты и сохрани каждый в отдельном файле.

Добавь export default в конец каждого файла.

Импортируй дочерние компоненты там, где они используются.

Сначала собери Header, MainContent и Footer.

Импортируй эти три блока в App.

Запусти проект и проверь, что ошибки импорта и JSX отсутствуют.

Проверь себя

Чем компонент отличается от обычного HTML-тега?

Для чего нужны import и export default?

Когда использовать ol, а когда ul?

Зачем картинке атрибут alt?

Какие три части подключаются в App?

КОРОТКО Компонент = функция + JSX. Экспортируй его, импортируй там, где он нужен, и собирай страницу из маленьких частей.
