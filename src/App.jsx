import './App.css'
import protein from './ingredients/proteins.json';
import produce from './ingredients/produce.json';
import grain from './ingredients/grains.json';
import sauce from './ingredients/sauce.json';
import neccessities from './ingredients/necessities.json';
import baking from './ingredients/baking.json';
import canned from './ingredients/canned.json';
import dried from './ingredients/dried.json';
import seasoning from './ingredients/seasoning.json';
import dairy from './ingredients/dairy.json';
import snack from './ingredients/snack.json';
import frozen from './ingredients/frozen.json';


function App() {
  const dillonsBreakfastIngredients = [
    ...dairy.filter(item => item.name === "Cream Cheese"),
    ...grain.filter(item => item.name === "Everything Bagel"),
    ...produce.filter(item => item.name === "Banana") 
    ]

  return (
    <div>
      
      {dillonsBreakfastIngredients.map(ingredient => (
        <p key={ingredient.name}>{ingredient.name}</p>
      ))}
    </div>
  )
}

export default App
