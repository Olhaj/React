import { useState } from "react";
import "./styles.module.css";

function NoteForm({ setNotes }) {
  // В поле ввода хранится обычная строка
  const [noteTitle, setNoteTitle] = useState("");

  function handleChange(event) {
    // Берём введённый текст и обновляем состояние поля
    setNoteTitle(event.target.value);
  }

  function handleSubmit(event) {
    // Не даём форме перезагрузить страницу
    event.preventDefault();

    const title = noteTitle.trim();

    // Не добавляем пустую задачу
    if (title === "") return;

    // Добавляем задачу в массив, который хранится в App
    setNotes(() => [{ title: title }]);

    // Очищаем поле после добавления
    setNoteTitle("");
  }

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name task"
          value={noteTitle}
          onChange={handleChange}
        />
        <button type="submit">Add task</button>
      </form>
    </div>
  );
}

export default NoteForm;
