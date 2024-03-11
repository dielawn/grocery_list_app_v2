import './App.css'
import { GroceryList } from './GroceryList'
import { useEffect, useState } from 'react'
import recipes from './recipes'

function App() {
  const [groceryList, setGroceryList] = useState([]) 
  const [recipeList, setRecipeList] = useState([])
  const [servingSize, setServingSize] = useState(2)
  const [isRecipeListVis, setIsRecipeListVis] = useState(true)

  function toggleVis() {
    setIsRecipeListVis(!isRecipeListVis)
  }


  function addToRecipeList(newRecipe) {
    const newList = [...recipeList, newRecipe]
    setRecipeList(newList)
   }

   function addAndConsolidate(recipeIngredients) {
    //temporary object to consolidate ingredients
    const consolidatedList = {}

    //add groceryList to consolidated list
    groceryList.forEach(item => {
        const key = `${item.unit} ${item.name}`
        consolidatedList[key] = {...item}
    })

    //add ingredient or update qty in consolidated list
    recipeIngredients.forEach(ingredient => {
        const key = `${ingredient.unit} ${ingredient.name}`
        if (key in consolidatedList) {
            consolidatedList[key].qty += ingredient.qty
        } else {
            consolidatedList[key] = {...ingredient}
        }
    })

    //convert object to an array set groceryList state
    const finalList= Object.values(consolidatedList)
    setGroceryList(finalList)
   }

   function addToLists(recipeIngredients, recipeName) {
    addAndConsolidate(recipeIngredients)
    addToRecipeList(recipeName)
   }

   useEffect(() => {
  
   }, [recipeList])

   useEffect(() => {
    console.log(groceryList)
   }, [groceryList])

  return (
<div className='listsDiv'>
      <div className='menuDiv'>
       
      <button><span className="material-symbols-outlined">menu</span></button>
        <button><span className="material-symbols-outlined">picture_as_pdf</span></button>        
        <button><span className="material-symbols-outlined">share</span></button>
        <button><span className="material-symbols-outlined">delete</span></button>
        
      </div>
   {isRecipeListVis ? (
     <div className='recipeDiv'>
     {recipes.map(recipe => (
         <div key={recipe.name} className='recipeCard'>
           
            <h3>{recipe.name}</h3> 
            {recipeList.map((item, index) => (
               item === recipe.name ? <div key={index}>✅ in grocery list</div> : null
             ))}           
             <img className='recipeImg' src={recipe.image} alt={recipe.name} /><br></br>    
                  
             <button onClick={() => addToLists(recipe.ingredients, recipe.name)}>Add {recipe.name.length > 15 ? (`${recipe.name.slice(0, 15)}...`) : (recipe.name)}</button>
             
         </div>
       ))}
     </div>
   ) : (
    <div className='groceryListDiv'>
    <GroceryList groceryList={groceryList} setGrocerList={setGroceryList} />
   </div>
   )}

<button className='flex visBtn' onClick={() => toggleVis()}>{isRecipeListVis ? 'Grocery List' : 'Recipes'} </button>

    </div>
  )
}

export default App
