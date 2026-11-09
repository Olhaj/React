import { multiplyNumbers, divideNumbers } from "../utils/UsefulFunction.js";

function ShowCalc() {
  const firstNumber = 10;
  const secondNumber = 2;

  return (
    <div>
      <h1>Результаты вычислений</h1>
      <p>
        Числа: {firstNumber} и {secondNumber}
      </p>
      <p>Умножение: {multiplyNumbers(firstNumber, secondNumber)}</p>
      <p>Деление: {divideNumbers(firstNumber, secondNumber)}</p>
    </div>
  );
}

export default ShowCalc;
