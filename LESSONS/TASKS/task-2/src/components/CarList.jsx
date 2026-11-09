function CarList() {
  const carsList = [
    "Toyota",
    "BMW",
    "Audi",
    "Mercedes",
    "Honda",
    "Ford",
    "Chevrolet",
    "Nissan",
    "Volkswagen",
    "Hyundai",
  ];

  return (
    <ul>
      {carsList.map((car, index) => (
        <li key={index}>{car}</li>
      ))}
    </ul>
  );
}

export default CarList;
