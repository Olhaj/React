import Pokemon from "../pokemon";

function PokemonList({ pokemonsData }) {
  return (
    <div>
      <h2>Pokemons:</h2>
      <ul>
        {/* {pokemonsData.map(({ id, name, type }) => {
          return <Pokemon key={id} name={name} type={type} />;
        })} */}
        {pokemonsData.map((pokemon) => {
          // сокращеная запись
          return <Pokemon key={pokemon.id} {...pokemon} />;
        })}
      </ul>
    </div>
  );
}

export default PokemonList;
