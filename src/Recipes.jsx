import './Recipes.css'
import recipes from './recipes'

function Recipes() {
    return (
<div>
      
      {recipes.map(recipe => (
        <div key={recipe.name}>
            <img className='recipeImg' src={recipe.image} alt={recipe.name} />
        <p>{recipe.name}</p>

        </div>
      ))}
    </div>
    )
}

export default Recipes