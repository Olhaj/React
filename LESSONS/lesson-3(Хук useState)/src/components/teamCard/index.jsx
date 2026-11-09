import styles from "./styles.module.css";

function TeamCard({ team }) {
  return (
    <div className={styles.cards}>
      <h2>{team.name}</h2>
      <ul>
        {/* Перебираем участников команды и создаём пункт списка для каждого */}
        {team.members.map((member) => (
          // key помогает React различать элементы списка
          <li key={member}>{member}</li> // А {member} выводит имя на странице.
        ))}
      </ul>
    </div>
  );
}

export default TeamCard;
