import { useState } from "react";
import "./App.css";
import NoteList from "./components/noteList";
import NoteForm from "./components/noteForm";
// import Form from "./components/form";

function App() {
  // const [color, setColor] = useState("black");

  // console.log("render app!");

  const [notes, setNotes] = useState([]);

  return (
    <div
      className="body"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   height: "100vh",
      //   backgroundColor: color,
      // }}
    >
      {/* <Form setColor={setColor} /> */}
      <div className="form">
        <NoteForm setNotes={setNotes} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
}

export default App;
