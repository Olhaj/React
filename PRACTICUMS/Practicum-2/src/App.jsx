import Menu from "./components/menu/index.jsx";
import MoviesDisplay from "./components/moviesDisplay/index.jsx";
import PokemonList from "./components/pokemonList/index.jsx";
import TrainRoutesList from "./components/trainRoutesList/index.jsx";
import TravelCard from "./components/travelCard/index.jsx";

function App() {
  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 2, name: "Charmander", type: "Fire" },
    { id: 3, name: "Squirtle", type: "Water" },
    { id: 4, name: "Pikachu", type: "Electric" },
    { id: 5, name: "Jigglypuff", type: "Normal/Fairy" },
    { id: 6, name: "Gengar", type: "Ghost/Poison" },
    { id: 7, name: "Snorlax", type: "Normal" },
    { id: 8, name: "Mewtwo", type: "Psychic" },
    { id: 9, name: "Dragonite", type: "Dragon/Flying" },
    { id: 10, name: "Eevee", type: "Normal" },
  ];

  const movies = [
    { id: 1, title: "Inception", year: "2010" },
    { id: 2, title: "The Matrix", year: "1999" },
    { id: 3, title: "Interstellar", year: "2014" },
    { id: 4, title: "Pulp Fiction", year: "1994" },
    { id: 5, title: "Forrest Gump", year: "1994" },
    {
      id: 6,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: "2001",
    },
    {
      id: 7,
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: "1980",
    },
    { id: 8, title: "The Dark Knight", year: "2008" },
    { id: 9, title: "Fight Club", year: "1999" },
    { id: 10, title: "The Godfather", year: "1972" },
  ];

  const destinations = [
    {
      id: 1,
      name: "Солнечная бухта",
      description:
        "Тихий приморский городок с узкими улочками и рынком у гавани.",
      imageUrl:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
      rating: 4.8,
      climate: "Средиземноморский",
    },
    {
      id: 2,
      name: "Горное озеро",
      description:
        "Высокогорное озеро с тропами для прогулок и видами на вершины.",
      imageUrl:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
      rating: 4.6,
      climate: "Горный",
    },
    {
      id: 3,
      name: "Старый порт",
      description: "Исторический портовый город с музеями, кафе и набережной.",
      imageUrl:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80",
      rating: 4.7,
      climate: "Мягкий морской",
    },
    {
      id: 4,
      name: "Лесная долина",
      description:
        "Зелёная долина с лесными маршрутами и небольшими водопадами.",
      imageUrl:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
      rating: 4.5,
      climate: "Умеренный",
    },
    {
      id: 5,
      name: "Золотые дюны",
      description: "Пустынный край с песчаными дюнами и ясным звёздным небом.",
      imageUrl:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80",
      rating: 4.9,
      climate: "Пустынный",
    },
  ];

  const routes = [
    {
      id: 1,
      from: "Берлин",
      to: "Прага",
      departure: "08:15",
      arrival: "12:30",
      price: 39,
    },
    {
      id: 2,
      from: "Париж",
      to: "Амстердам",
      departure: "09:20",
      arrival: "12:45",
      price: 55,
    },
    {
      id: 3,
      from: "Вена",
      to: "Будапешт",
      departure: "10:10",
      arrival: "12:50",
      price: 28,
    },
    {
      id: 4,
      from: "Цюрих",
      to: "Милан",
      departure: "14:05",
      arrival: "17:35",
      price: 46,
    },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Garlic Bread",
      description: "Classic garlic bread, with a hint of herbs.",
      price: 5,
    },
    {
      id: 2,
      name: "Soup of the Day",
      description: "A delicious way to start your meal.",
      price: 7,
    },
    {
      id: 3,
      name: "Grilled Salmon",
      description: "Fresh salmon that's grilled to perfection.",
      price: 15,
    },
    {
      id: 4,
      name: "Steak",
      description: "High-quality beef with our special sauce.",
      price: 18,
    },
    {
      id: 5,
      name: "Cheesecake",
      description: "Creamy cheesecake with a crispy base.",
      price: 6,
    },
    {
      id: 6,
      name: "Ice Cream",
      description: "Choose from our variety of flavors.",
      price: 4,
    },
  ];

  return (
    <>
      <PokemonList pokemonsData={pokemons} />
      <MoviesDisplay movies={movies} />
      {destinations.map((destinations) => (
        <TravelCard key={destinations.id} destinations={destinations} />
      ))}
      <TrainRoutesList routes={routes} />
      <Menu menuItemsData={menuItems} />
    </>
  );
}

export default App;
