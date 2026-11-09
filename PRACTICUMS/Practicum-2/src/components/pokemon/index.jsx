function Pokemon({ id, name, type }) {
  return (
    <li>
      <h2>ID: {id}</h2>
      <h3>Name: {name}</h3>
      <h4>Type: {type}</h4>
    </li>
  );
}

export default Pokemon;
