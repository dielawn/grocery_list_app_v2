import { useEffect, useState } from "react";
import recipes from './recipes'

function SearchRecipes({ matchingRecipes, setMatchingRecipes, keyword, setKeyword}) {
    
    
    function search() {        

        if (keyword === '') return;
        const prevMatches = [...matchingRecipes]
        const newMatches = recipes.filter(recipe =>
            Array.isArray(recipe.ingredients) && recipe.ingredients.some(item => item.name?.toLowerCase().includes(keyword.toLowerCase()))
        )
        setMatchingRecipes([...prevMatches, ...newMatches.map(({ name, ingredients, image, instructions, link }) => ({ name, ingredients, image, instructions, link }))])
    
    }

    useEffect(() => {
        setMatchingRecipes([])
    }, [keyword])

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


export {
    SearchRecipes,
    
}