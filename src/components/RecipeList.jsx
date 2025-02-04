import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  if (!recipes.length) return <p>No Recipes Found</p>;

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
