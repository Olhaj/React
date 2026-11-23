import NoteItem from "../noteItem";

function NoteList({ notes }) {
  if (notes.length === 0) {
    return <p>Empty list...</p>;
  }

  return (
    <ul>
      {notes.map((note) => {
        return <NoteItem key={note.id} {...note} />;
      })}
    </ul>
  );
}

export default NoteList;
