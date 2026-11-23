import { useState } from "react";

function Form({ setColor }) {
  const [newColor, setNewColor] = useState("black");

  function handleChange(event) {
    setNewColor(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setColor(newColor);
  }

  console.log("render form!");

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="color"
        style={{
          height: "100px",
          width: "100px",
        }}
        value={newColor}
        onChange={handleChange}
      />
      <button type="submit">Change!</button>
    </form>
  );
}

export default Form;
