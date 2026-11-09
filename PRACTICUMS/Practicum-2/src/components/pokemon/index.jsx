function Pokemon({ id, name, type }) {
  return (
    <li>
      <h3>Name: {name}</h3>
      <h4>Type: {type}</h4>
    </li>
  );
}

export default Pokemon;
