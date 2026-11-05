// function Button(props) {
// создаем компонент Button, который принимает объект props
//   console.log(props);
//   return (
// в компонент Button передаем значение свойства title, которое будет отображаться в кнопке
//     <button>{props.title}</button>
//   );
// }

// export default Button;

function Button({ title, bgColor = "blue" }) {
  // это деструктуризация объекта props, мы сразу получаем значение свойства title
  return <button style={{ backgroundColor: bgColor }}>{title}</button>;
}

export default Button;
