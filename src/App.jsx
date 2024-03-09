import './App.css'
import { dillonsBreakfastIngredients } from './recipes'

function App() {
  

  return (
    <div>
      
      {dillonsBreakfastIngredients.map(ingredient => (
        <p key={ingredient.name}>{ingredient.name}</p>
      ))}
    </div>
  )
}

export default App
