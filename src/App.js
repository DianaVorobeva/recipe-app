import video from './food.mp4';
import './App.css';
import { useEffect, useState } from 'react';
import RecipesComponent from './RecipesComponent';
import SideBlock from './SideBlock';

function App() {
  const MY_ID = "98be944f";
  const MY_KEY = "1d1d40008c21b714371c4481543b3b42";

  const [mySearch, setSearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("");
  const [show,setShow] = useState(true);

  useEffect(() => {
    async function getRecipe() {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits);
   
  };
  getRecipe();
}, [wordSubmitted])

const myRecipeSearch = (e) => {
setSearch(e.target.value);
}

const finalSearch = (e) => {
    e.preventDefault();
    setShow(false)
    setWordSubmitted(mySearch);
    
}

  return (
    <div className="App">

    <div className="container">
    <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </video>
    <h1>Find a Recipe</h1>
    </div>

    <div className="container">
    <form onSubmit={finalSearch}>
      <input className='search' placeholder='search'onChange={myRecipeSearch} value={mySearch} ></input>
    </form>
    </div>
   {show ? <SideBlock/> : myRecipes.map(element => (
      <RecipesComponent key={element.recipe.calories}
       label={element.recipe.label} 
       image={element.recipe.image} 
       calories={element.recipe.calories}
       ingredients={element.recipe.ingredientLines}
       fats = {element.recipe.digest[0].total}
       carbs = {element.recipe.digest[1].total}
       protein = {element.recipe.digest[2].total}
       />
    ))}
  
    </div>
  );
}


export default App;
