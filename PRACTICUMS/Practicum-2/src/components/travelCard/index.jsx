import DestinationImage from "../destinationImage/index";
import DestinationInfo from "../destinationInfo";
import DestinationStats from "../destinationStats";

function TravelCard({ destinations }) {
  return (
    <div>
      <DestinationImage
        imageUrl={destinations.imageUrl}
        name={destinations.name}
      />

      <DestinationInfo
        name={destinations.name}
        destinations={destinations.destinations}
      />

      <DestinationStats
        rating={destinations.rating}
        climate={destinations.climate}
      />
    </div>
  );
}

export default TravelCard;
