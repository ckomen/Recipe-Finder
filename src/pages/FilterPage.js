import { useState } from "react";
import FilterPanel from "../components/FilterPanel";
import RecipeList from "../components/RecipeList";

const FiltersPage = () => {
  const [recipes, setRecipes] = useState([]);

  const handleFilter = (diet) => {
    fetch(`http://localhost:3001/recipes?diet=${diet}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  };

  return (
    <div>
      <FilterPanel onFilter={handleFilter} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default FiltersPage;
