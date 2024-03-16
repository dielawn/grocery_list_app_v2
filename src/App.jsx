import './App.css'
import { GroceryList } from './GroceryList'
import { useEffect, useState } from 'react'
import { saveToLocalStorage, loadFromLocalStorage } from './localStorage'
import { ServingSizeSelect } from './ServingSelect'
import { SelectedRecipeList, RecipesList } from './RecipeList'
import { DownloadPDF } from './DownloadPDF'
import { SearchRecipes } from './Search'
import recipes from './recipes'
import { useTheme } from './Theme'

import { AisleSelect } from './AisleSelect'

function App() {
  const [groceryList, setGroceryList] = useState([]) 
  const [recipeList, setRecipeList] = useState([])
  const [matchingRecipes, setMatchingRecipes] = useState([])
  const [keyword, setKeyword] = useState('')
  const [servingSize, setServingSize] = useState(2)
  const [isRecipeListVis, setIsRecipeListVis] = useState(true)
  const [isMenuVis, setIsMenuVis] = useState(false)
  const [sortedGroceryList, setSortedGroceryList] = useState([])
  const [aisleOrder, setAisleOrder] =  useState(['dairy', 'freezer', 'cheese', 'snack', 'butcher', 'ethnic', 'noodle',  'canned', 'baking', 'cereal', 'condiment', 'bakery', 'produce', 'nutrition', ''])
  const { theme, toggleTheme } = useTheme()

  function toggleVis(el) {
    switch(el) {
      case 'menu':
        setIsMenuVis(!isMenuVis)
        break;
      case 'list':
        setIsRecipeListVis(!isRecipeListVis)
        break;
      case 'initialState':
        setIsMenuVis(false)
        setIsRecipeListVis(true)
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
    toggleVis('initialState')

   }

   const sortList = () => {
    const sortedList = [...groceryList].sort((a, b) => {
        const aIndex = aisleOrder.indexOf(a.aisle)
        const bIndex = aisleOrder.indexOf(b.aisle)
        return aIndex - bIndex
    })
    setSortedGroceryList(sortedList)
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
    sortList()
   }, [groceryList, recipeList])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme])

  return (
   
   
<div className='listsDiv'>

      <div className='navDiv'>

      <button onClick={() => toggleVis('menu')} className='menuBtn'><span className="material-symbols-outlined">menu</span></button>
        
        {isMenuVis && <div className="menuDiv">
         
          <button onClick={toggleTheme} className='menuItem'><span className="material-symbols-outlined">dark_mode</span></button>

          <button className='menuItem' onClick={() => alert('coming soon...')}><span className="material-symbols-outlined">share</span></button>
          <button className='menuItem' onClick={() => deleteList()}><span className="material-symbols-outlined">delete</span></button>
          {/* <AisleSelect aisleOrder={aisleOrder} setAisleOrder={setAisleOrder} sortList={sortList}/> */}
        </div>}    

      </div>
      {isRecipeListVis && <div className='searchDiv'>
     <SearchRecipes matchingRecipes={matchingRecipes} setMatchingRecipes={setMatchingRecipes} keyword={keyword} setKeyword={setKeyword}/>
     </div>}
     {!isRecipeListVis && 
      <div className='listMenu'>
        <ServingSizeSelect  setServingSize={setServingSize} servingSize={servingSize} groceryList={groceryList} setGroceryList={setGroceryList}/>
        <DownloadPDF groceryList={groceryList} recipeList={recipeList} />
        
      </div>
      }

      {isRecipeListVis ? (
  matchingRecipes.length > 0 ? (
    <div className='recipeDiv'>
    <RecipesList list={matchingRecipes} addToLists={addToLists} recipeList={recipeList} />
    </div>
  ) : (
    <div className='recipeDiv'>
      <RecipesList addToLists={addToLists} recipeList={recipeList} list={recipes} />
    </div>
  )
) : (
  <div className='groceryListDiv'>      
    <GroceryList groceryList={sortedGroceryList} setGroceryList={setGroceryList} />
    <SelectedRecipeList recipeList={recipeList} />
  </div>
)}


<button className='flex visBtn' onClick={() => toggleVis('list')}>{isRecipeListVis ? 'Grocery List' : 'Recipes'} </button>

    </div>
 
   
   
  )
}

export default App
