// 9. Создайте новый компонент "LinkButton",
// который будет представлять собой кнопку
// в виде ссылки, пусть ссылка ведёт на
// любой ресурс на ваше усмотрение.

function LinkButton() {
  return (
    <a href="https://en.wikipedia.org/wiki/Cat">
      <button type="button">Click Me!</button>
    </a>
  );
}

export default LinkButton;
