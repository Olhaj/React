import CategoryCardList from "../../components/categoryCardList";
import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import VacancyCardList from "../../components/vacancyCardList";

function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <CategoryCardList />
      <VacancyCardList />
    </>
  );
}

export default Home;
