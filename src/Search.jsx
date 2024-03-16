import { useState } from "react";
import recipes from './recipes'

function SearchRecipes({ matchingRecipes, setMatchingRecipes, keyword, setKeyword }) {
    
    
    function search() {
        setMatchingRecipes([])

        if (keyword === '') return;
        const prevMatches = [...matchingRecipes];
        const newMatches = recipes.filter(recipe =>
            Array.isArray(recipe.ingredients) && recipe.ingredients.some(item => item.name?.toLowerCase().includes(keyword.toLowerCase()))
        )
        setMatchingRecipes([...prevMatches, ...newMatches.map(({ name, ingredients, image, instructions, link }) => ({ name, ingredients, image, instructions, link }))]);
    
    }

    function handleClear() {
        setMatchingRecipes([])
        setKeyword('')
    }

    return (
        <div>
            <label className="blkTxt" htmlFor="searchInput">Keyword Search: 
                <input 
                    id="searchInput"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    />
            </label>
            <div>
            <button onClick={() => search()}>Search</button>
            <button onClick={() => handleClear()}>Clear</button>
            </div>
        </div>
    )
}

function DisplayMatches({matchingRecipes, addToLists}) {
    return (
        <>
            {matchingRecipes.map((recipe, index) => (
            <div key={index} className='recipeCard'>              
               <h3>{recipe.name}</h3>                      
                <img className='recipeImg' src={recipe.image} alt={recipe.name} /><br></br>                         
                <button onClick={() => addToLists(recipe.ingredients, recipe.name)}>Add {recipe.name.length > 15 ? (`${recipe.name.slice(0, 15)}...`) : (recipe.name)}</button>
                
            </div>
          ))}
        </>
    )
}

export {
    SearchRecipes,
    DisplayMatches,
}