function Tasks({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li>{task}</li>
      ))}
    </ul>
  );
}

export default Tasks;
