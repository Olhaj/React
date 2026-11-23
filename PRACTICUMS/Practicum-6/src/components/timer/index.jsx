import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (active) {
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [active, seconds]);

  console.log("render app");

  return (
    <div>
      <h1>{seconds}</h1>
      <div>
        <button onClick={() => setActive(true)}>Start</button>
        <button onClick={() => setActive(false)}>Stop</button>
        <button
          onClick={() => {
            setActive(false);
            setSeconds(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Timer;

//* Здесь передана пустая функция. Поскольку второго аргумента нет, React запускает её после каждого рендера компонента: при первом
//* показе и после каждого обновления.
// useEffect(() => {});

//* Второй аргумент — массив зависимостей. Пустой массив [] означает, что эффект не зависит от изменяющихся значений компонента. React запускает его после первого отображения.
//* Так часто начинают таймеры или подписываются на события:
// useEffect(() => {}, []);

//* [a, b, c] — список зависимостей. Эффект запускается после первого отображения, а затем снова, когда изменится a, b или c.
// useEffect(() => {}, [a, b, c]);

//* Внутренняя функция return называется очисткой. React вызывает её перед повторным запуском эффекта из-за изменения зависимостей и при удалении компонента со страницы.
//* Например, если эффект запустил таймер, очистка остановит его:
// useEffect(() => {
//   ......
//   return () => {}
// }, [a, b, c]);
