React Урок 7

Context и хук useContext

Context помогает нескольким компонентам получать общие данные без передачи props через каждый промежуточный уровень. В уроке примеры используют тему оформления, счётчик с функциями и данные, загруженные из API.

ГЛАВНОЕ Создай контекст, помести нужную часть интерфейса под Provider, передай значение через value, а внутри вложенного компонента прочитай его через useContext.

1. Зачем нужен Context

Обычно данные передаются сверху вниз через props. Если глубоко вложенному компоненту нужны данные от далёкого родителя, приходится передавать их через компоненты, которым они не нужны. Это называют prop drilling. Context даёт общим данным путь к компонентам-потребителям внутри Provider.

Подходящие примеры: тема оформления, язык, авторизованный пользователь или общие данные, используемые несколькими удалёнными частями интерфейса.

НЕ ДЕЛАЙ ВСЁ ГЛОБАЛЬНЫМ Если данные нужны только одному компоненту и его ближайшим детям, обычные props и локальный state проще и понятнее.

2. Создать контекст и предоставить значение

createContext создаёт объект контекста. Provider задаёт value, доступный потомкам внутри его дерева. Значение по умолчанию используется только если компонент читает контекст вне Provider.

// ThemeContext.jsx
import { createContext } from 'react';
export const ThemeContext = createContext(null);

// App.jsx
import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
const [theme, setTheme] = useState('light');
return (
<ThemeContext.Provider value={{ theme, setTheme }}>
<Page />
</ThemeContext.Provider>
);
}

ОБЛАСТЬ ДЕЙСТВИЯ Доступ к значению есть у потомков Provider. Компонент выше Provider или в другой ветке дерева не получит это значение.

3. Прочитать контекст через useContext

Функциональный компонент вызывает useContext(Контекст) и получает текущее значение Provider. Когда значение контекста меняется, компоненты-потребители обновляются.

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeSwitcher() {
const { theme, setTheme } = useContext(ThemeContext);
const nextTheme = theme === 'light' ? 'dark' : 'light';
return (
<button onClick={() => setTheme(nextTheme)}>
Тема: {theme}. Сменить
</button>
);
}

В классовом коде встречается Consumer, но в функциональных компонентах обычно используют useContext: код получается короче и без вложенного render-функционала.

4. Передавать функции и состояние

В value можно положить не только одно значение, но объект с состоянием и функциями. Тогда разные потребители могут показывать значение и менять его, не получая props через промежуточные компоненты.

const CounterContext = createContext(null);

function CounterProvider({ children }) {
const [count, setCount] = useState(0);
const increment = () => setCount(value => value + 1);
const decrement = () => setCount(value => value - 1);

return (
<CounterContext.Provider value={{ count, increment, decrement }}>
{children}
</CounterContext.Provider>
);
}

function IncrementButton() {
const { increment } = useContext(CounterContext);
return <button onClick={increment}>Увеличить</button>;
}

ПРИМЕЧАНИЕ В примере CounterProvider использует useState и createContext: не забудь импортировать оба хука и объявить контекст вне компонента.

5. Использовать Context для данных из API

Если нескольким компонентам нужны одни и те же загруженные данные, Provider может загрузить их один раз, хранить состояние и предоставлять данные, статус загрузки и ошибку через Context.

const DataContext = createContext(null);

function DataProvider({ children }) {
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

useEffect(() => {
async function loadPosts() {
try {
const response = await axios.get('/api/posts');
setPosts(response.data);
} catch {
setError('Не удалось загрузить записи');
} finally {
setLoading(false);
}
}
loadPosts();
}, []);

return (
<DataContext.Provider value={{ posts, loading, error }}>
{children}
</DataContext.Provider>
);
}

function PostList() {
const { posts, loading, error } = useContext(DataContext);
if (loading) return <p>Загрузка...</p>;
if (error) return <p>{error}</p>;
return <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>;
}

Оберни PostList (или всё приложение) в DataProvider. В примере API endpoint условный: подставь адрес своего сервера. При настоящих запросах также продумай отмену устаревшего запроса при размонтировании компонента.

6. Плюсы, ограничения и ошибки

Context убирает длинную цепочку передачи props и подходит для общих данных.

Каждый потребитель обновляется, когда value контекста меняется. Не клади в один контекст часто меняющиеся несвязанные данные без необходимости.

Provider должен оборачивать каждый компонент, который вызывает useContext для этого контекста.

Если value — объект, его изменения должны быть осмысленными; иначе потребители будут часто перерисовываться.

Разделяй независимые области данных на отдельные контексты, если так код проще поддерживать.

ИТОГ Context — способ поделиться значением на поддерево компонентов. Provider предоставляет данные и функции, useContext читает их. Используй его для действительно общих данных, а локальное состояние оставляй рядом с местом, где оно нужно.
