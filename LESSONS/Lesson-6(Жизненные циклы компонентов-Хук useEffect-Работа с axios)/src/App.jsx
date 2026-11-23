import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     console.log("count changed");
//   }, [count]);

//   useEffect(() => {
//     console.log("input changed");
//   }, [title]);

//   console.log("render app");
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>plus one</button>
//       <br />
//       <input
//         type="text"
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//       />
//     </div>
//   );
// }
// export default App;

function App() {
  const [seconds, setSeconds] = useState(0);

  // useEffect(() => {
  //   console.log("effect mount");

  // const timerId = setInterval(() => {
  //   setSeconds((prev) => prev + 1);
  // }, 1000);

  //   return () => {
  //     console.log("unmount");

  //     clearInterval(timerId);
  //   };
  // }, []);

  return (
    <div>
      <h2>Seconds: {seconds}</h2>
    </div>
  );
}

export default App;
