import './App.css'
import { GroceryList } from './GroceryList'
import { useEffect, useState } from 'react'
import recipes from './recipes'
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage'
import { ServingSizeSelect } from './ServingSelect'
import { SelectedRecipeList, RecipesList } from './RecipeList'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { DownloadPDF } from './DownloadPDF'
import { GeneratePDF } from './GeneratePDF'



function App() {
  const [groceryList, setGroceryList] = useState([]) 
  const [recipeList, setRecipeList] = useState([])
  const [servingSize, setServingSize] = useState(2)
  const [isRecipeListVis, setIsRecipeListVis] = useState(true)
  const [isMenuVis, setIsMenuVis] = useState(false)

  function toggleVis(el) {
    switch(el) {
      case 'menu':
        setIsMenuVis(!isMenuVis)
        break;
      case 'list':
        setIsRecipeListVis(!isRecipeListVis)
        break;
      default:
        setIsMenuVis(false)
        setIsRecipeListVis(true)
    }    
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

    recipeIngredients.forEach(ingredient => {
      const key = `${ingredient.unit} ${ingredient.name}`
      const adjustedQty = ingredient.qty * servingSize
      if (key in consolidatedList) {
        //if the ingredient is already in the list, update its quantity
        consolidatedList[key].qty += adjustedQty;
    } else {
        //if it's a new ingredient, create a copy with the adjusted quantity
        consolidatedList[key] = {...ingredient, qty: adjustedQty};
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

   function deleteList() {
    setGroceryList([])
    setRecipeList([])
    localStorage.clear()
   }

  //check local history for a grocery list if so load it
   useEffect(() => {
    let loadedGroceryList = []
    let loadedRecipeList = []
    loadFromLocalStorage(loadedGroceryList, loadedRecipeList)
    if (loadedGroceryList.length > 0) setGroceryList(loadedGroceryList)
    if (loadedRecipeList.length > 0) setRecipeList(loadedRecipeList)
   }, [])


   useEffect(() => {
    saveToLocalStorage(groceryList, recipeList)
   }, [groceryList, recipeList])

  return (
<div className='listsDiv'>

      <div className='navDiv'>

      <button onClick={() => toggleVis('menu')} className='menuBtn'><span className="material-symbols-outlined">menu</span></button>
        
        {isMenuVis && <div className="menuDiv">
          <ServingSizeSelect  className='menuItem' setServingSize={setServingSize} servingSize={servingSize} groceryList={groceryList} setGroceryList={setGroceryList}/>
          <DownloadPDF className='menuItem' groceryList={groceryList} recipeList={recipeList} />
          <button className='menuItem' onClick={() => alert('coming soon...')}><span className="material-symbols-outlined">share</span></button>
          <button className='menuItem' onClick={() => deleteList()}><span className="material-symbols-outlined">delete</span></button>
        </div>}    

      </div>

   {isRecipeListVis ? (
     <div className='recipeDiv'>
       <RecipesList addToLists={addToLists} recipeList={recipeList} />
     </div>
   ) : (
    <div className='groceryListDiv'>      
    <GroceryList groceryList={groceryList} setGroceryList={setGroceryList} />
    <SelectedRecipeList recipeList={recipeList} />
   </div>
   )}

<button className='flex visBtn' onClick={() => toggleVis('list')}>{isRecipeListVis ? 'Grocery List' : 'Recipes'} </button>

    </div>
  )
}

export default App
