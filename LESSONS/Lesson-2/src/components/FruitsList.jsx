function FruitsList() {
  const fruits = ["Apple", "Banana", "Cherry", "Orange", "Kiwi"];
  return (
    <ul>
      {fruits.length === 0
        ? "Empty list"
        : fruits.map((fruit) => {
            // проверяем, если массив fruits пустой, то отображаем сообщение "Empty list", иначе перебираем массив fruits
            // используем метод map для перебора массива fruits
            return <li key={Math.random()}>{fruit}</li>; // возвращаем элемент li с уникальным ключом и значением fruit
          })}
    </ul>
  );
}

export default FruitsList;
