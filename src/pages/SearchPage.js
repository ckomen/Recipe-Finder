import { useState } from "react";
import SearchForm from "../components/SearchForm";
import RecipeList from "../components/RecipeList";

const SearchPage = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = (query) => {
    fetch(`http://localhost:3001/recipes?ingredient=${query}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default SearchPage;
