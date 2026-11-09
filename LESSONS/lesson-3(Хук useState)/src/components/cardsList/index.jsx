import TeamCard from "../teamCard";
import styles from "./styles.module.css";

function CardsList({ teams }) {
  return (
    <div className={styles.card_list}>
      {/* Для каждой команды создаём отдельную карточку */}
      {teams.map((team) => (
        <TeamCard key={team.name} team={team} />
      ))}
    </div>
  );
}

export default CardsList;
