React Урок 4

События и интерактивность

События позволяют интерфейсу реагировать на действия пользователя: нажатия, ввод текста, отправку формы и другие действия. В React обработчик обычно задают прямо в JSX; он может обновить состояние, и тогда интерфейс перерисуется.

ГЛАВНОЕ В JSX укажи событие в camelCase и передай ему функцию: onClick={handleClick}. Передавай саму функцию, чтобы она запустилась при событии, а не во время отображения компонента.

1. Обработчик события

function App() {
function handleClick() {
console.log('Кнопка нажата');
}

return <button onClick={handleClick}>Нажми</button>;
}

Популярные события мыши: onClick, onDoubleClick, onMouseDown, onMouseUp, onMouseOver, onMouseOut, onMouseMove. Клавиатурные: onKeyDown (клавишу нажали) и onKeyUp (отпустили). Для ввода в форму часто нужны onChange и onSubmit.

2. Передача аргументов и объект event

Если обработчику нужны дополнительные данные, оберни вызов в стрелочную функцию. Иначе handleClick(item) выполнится сразу при рендере.

<button onClick={() => handleClick(item.id)}>Выбрать</button>

React передаёт обработчику объект события. Через event.target получаем элемент, который вызвал событие; через event.target.value — текущее значение поля ввода. event.preventDefault() отменяет стандартное действие браузера.

function handleChange(event) {
console.log(event.target.value);
}
<input onChange={handleChange} />

СОВРЕМЕННОЕ УТОЧНЕНИЕ В PDF описан «пул» SyntheticEvent и необходимость event.persist(). Для современных React на вебе это устаревшее ограничение: обычно event можно использовать и после обработчика. Не вызывай persist без необходимости.

3. Формы: onChange, onSubmit и состояние

В управляемом поле значение хранится в состоянии React. onChange обновляет состояние при вводе, а onSubmit обрабатывает отправку формы. preventDefault() не даёт браузеру перезагрузить страницу.

import { useState } from 'react';

function NameForm() {
const [name, setName] = useState('');

function handleSubmit(event) {
event.preventDefault();
console.log('Имя:', name);
}

return (
<form onSubmit={handleSubmit}>
<label>Имя: <input value={name} onChange={e => setName(e.target.value)} /></label>
<button type="submit">Отправить</button>
</form>
);
}

ЗАМЕТЬ Для управляемого input нужны обе стороны связи: value={name} показывает состояние, onChange обновляет состояние при вводе.

4. События меняют состояние

Обработчик может обновить состояние через setter useState. Например, счётчик увеличивается кнопкой; если новое значение зависит от предыдущего, используй функциональное обновление:

const [count, setCount] = useState(0);
<button onClick={() => setCount(previous => previous + 1)}>+1</button>

По тому же принципу можно перелистывать изображения в карусели, менять заголовок по тексту из input, проверять введённые данные и показывать сообщение об ошибке.

5. Всплытие, делегирование и остановка

По умолчанию событие всплывает от элемента, где произошло, к его родителям. Поэтому можно поставить обработчик на общий контейнер и определить, по какой кнопке кликнули — это делегирование событий.

function Counter() {
const [count, setCount] = useState(0);
function handleContainerClick(event) {
if (event.target.dataset.action === 'add') setCount(c => c + 1);
if (event.target.dataset.action === 'subtract') setCount(c => c - 1);
}
return (
<div onClick={handleContainerClick}>
<p>Счёт: {count}</p>
<button data-action="add">+</button>
<button data-action="subtract">-</button>
</div>
);
}

Если событие не должно доходить до родителя, вызови event.stopPropagation(). Используй это только там, где действительно нужно прервать всплытие.

function handleButtonClick(event) {
event.stopPropagation();
console.log('Клик только по кнопке');
}

6. Практический пример: список животных

В задании из PDF создаётся список животных. Состояние начинается с пустого массива; по нажатию кнопки случайное животное добавляется в новый массив, затем элементы выводятся через map.

const animalList = ['Собака', 'Кошка', 'Заяц', 'Лиса'];
const [animals, setAnimals] = useState([]);

function addRandomAnimal() {
const index = Math.floor(Math.random() \* animalList.length);
setAnimals(previous => [...previous, animalList[index]]);
}

<button onClick={addRandomAnimal}>Добавить животное</button>

<ul>{animals.map((animal, index) => <li key={`${animal}-${index}`}>{animal}</li>)}</ul>

Короткая памятка

onClick={handler} — передать функцию; onClick={() => handler(value)} — передать аргумент.

event.target.value — значение поля; event.preventDefault() — отменить стандартное действие.

onChange обновляет поле, onSubmit обрабатывает форму.

События обычно всплывают к родителям; stopPropagation() останавливает всплытие.

Изменение состояния в обработчике приводит к обновлению интерфейса.

ИТОГ Пользователь вызывает событие → обработчик выполняет действие → при необходимости обновляет state → React показывает обновлённый интерфейс.
