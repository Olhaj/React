React Урок 3

Стилизация компонентов и хук useState

В этом уроке две связанные темы: как оформить React-компоненты и как менять интерфейс в ответ на действия пользователя. Для оформления есть внешний CSS, встроенные стили и CSS Modules. Для изменяемых данных используют состояние useState.

ГЛАВНОЕ Если данные должны меняться и сразу отражаться на странице, храни их в состоянии. Обновляй состояние setter-функцией, а не меняй напрямую.

1. Три способа добавлять стили

Обычный внешний CSS

Стили лежат в отдельном .css файле, который импортируют в компонент. Это удобно для большинства оформления, повторного использования правил, адаптивности и псевдоклассов вроде :hover. Классы глобальные, поэтому одинаковые имена могут конфликтовать.

// Button.jsx
import './Button.css';
function Button() { return <button className="button">Нажми</button>; }

/_ Button.css _/
.button { background: purple; color: white; padding: 8px 16px; }
.button:hover { background: magenta; }

Встроенные стили

Задаются объектом JavaScript прямо в JSX. CSS-свойства пишутся в camelCase, например backgroundColor; размеры можно указывать числом (пиксели) или строкой. Подходит для простого или динамического оформления, но неудобен для сложных правил, :hover и медиазапросов.

const boxStyle = { backgroundColor: 'lightblue', fontSize: 18, border: '1px solid blue' };
function Box() { return <div style={boxStyle}>Текст</div>; }

CSS Modules

Файл называют, например, Button.module.css. Классы из него локальны для компонента, что уменьшает риск конфликтов. Их импортируют как объект и применяют через className={styles.button}.

import styles from './Button.module.css';
function Button() { return <button className={styles.button}>Нажми</button>; }

КАК ВЫБИРАТЬ Обычный CSS — общее оформление проекта; CSS Modules — стили компонента без глобальных конфликтов; inline style — короткое или вычисляемое прямо из данных значение.

2. Что такое состояние и useState

Состояние (state) — данные компонента, которые могут изменяться. Обычная переменная не подходит для отображаемых изменений: React не узнает, что она поменялась, и сам не обновит страницу. useState хранит значение между рендерами и сообщает React, когда нужно перерисовать компонент.

import { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);
return (
<div>
<p>Нажатий: {count}</p>
<button onClick={() => setCount(count + 1)}>Увеличить</button>
</div>
);
}

useState(initialValue) возвращает пару: текущее значение и функцию для обновления. Запись [count, setCount] использует деструктуризацию массива. После вызова setCount React обновит значение и заново отобразит компонент.

ПРАВИЛО ХУКА Вызывай useState на верхнем уровне функционального компонента, не внутри условий или циклов.

3. Состояние разных типов и обновление

Состоянием могут быть число, строка, true/false, массив или объект. Если новое значение зависит от предыдущего, используй функциональную форму setter-а:

setCount(previousCount => previousCount + 1);

Для массивов и объектов не меняй исходное значение на месте. Создавай новый массив или объект: так React может корректно заметить обновление.

// добавить элемент
setAnimals(previous => [...previous, newAnimal]);

// удалить элемент по id
setTodos(previous => previous.filter(todo => todo.id !== id));

// изменить одно поле объекта, сохранив остальные
setUser(previous => ({ ...previous, age: 21 }));

НЕ ДЕЛАЙ ТАК Не обновляй массив состояния через push/splice и не присваивай напрямую state.field = .... Используй setter и копию через spread, map или filter.

4. Состояние в родителе и props

Часто родитель хранит состояние и передаёт его дочернему компоненту через props. Дочерний компонент может показать значение, но не должен менять prop напрямую. При необходимости родитель передаёт также функцию обновления.

function Parent() {
const [count, setCount] = useState(0);
return <CounterDisplay count={count} onIncrease={() => setCount(c => c + 1)} />;
}

function CounterDisplay({ count, onIncrease }) {
return <button onClick={onIncrease}>Счёт: {count}</button>;
}

5. Пример из практической работы

Список животных хранится в состоянии. Нажатие кнопки добавляет случайное животное; список заново выводится через map. У элементов списка должен быть key.

import { useState } from 'react';

function Animals() {
const animalList = ['Собака', 'Кошка', 'Заяц', 'Лиса', 'Хомяк'];
const [animals, setAnimals] = useState([]);

function addRandomAnimal() {
const index = Math.floor(Math.random() \* animalList.length);
const animal = animalList[index];
setAnimals(previous => [...previous, animal]);
}

return (
<div>
<button onClick={addRandomAnimal}>Добавить животное</button>
<ul>{animals.map((animal, index) => <li key={`${animal}-${index}`}>{animal}</li>)}</ul>
</div>
);
}

ЗАМЕТКА В исходном задании было 10 названий животных, поэтому там индекс умножался на 10. Если длина списка меняется, используй animalList.length — тогда индекс всегда останется допустимым.

6. Короткая памятка

style={{ ... }} принимает JavaScript-объект; CSS-свойства в нём записываются camelCase.

useState возвращает текущее состояние и setter-функцию.

Меняй состояние только через setter.

Для обновления на основе старого значения используй setter(previous => ...).

Массивы и объекты обновляй иммутабельно, создавая копию.

Передавай состояние детям через props; данные идут от родителя к ребёнку.

ИТОГ CSS отвечает за внешний вид, useState — за изменяемые данные интерфейса. Когда пользователь нажимает кнопку, обработчик обновляет state, React повторно рендерит компонент, и на экране появляется новое состояние.
