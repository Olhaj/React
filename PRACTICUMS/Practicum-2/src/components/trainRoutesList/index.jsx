import TrainRoute from "../trainRoute";

function TrainRoutesList({ routes }) {
  return (
    <div>
      {routes.map((routes) => (
        <TrainRoute key={routes.id} {...routes} />
      ))}
    </div>
  );
}

export default TrainRoutesList;
