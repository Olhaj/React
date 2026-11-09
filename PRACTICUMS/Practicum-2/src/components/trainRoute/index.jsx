function TrainRoute({ from, to, departure, arrival, price }) {
  return (
    <div>
      <h3>From: {from}</h3>
      <h3>To: {to}</h3>
      <ul>
        <li>Departure: {departure}</li>
        <li>Arrival: {arrival}</li>
        <li>Price: {price}</li>
      </ul>
    </div>
  );
}

export default TrainRoute;
