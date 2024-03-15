import { useState } from "react";
import recipes from './recipes'

function SelectedRecipeList({recipeList}) {

    return (
        <div>
            <h3>Selected Recipes</h3>
            {recipeList.map((recipe, index) => (
                <p key={index}>{recipe}</p>
            )) }
        </div>
    )
}

function RecipesList({addToLists, recipeList}) {
    return (
        <>
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
        </>
       
    )
}

export{
    SelectedRecipeList,
    RecipesList,
}