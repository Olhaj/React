function MenuItems({ name, description, price }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default MenuItems;
