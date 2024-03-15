import { useState, useEffect } from "react";
import recipes from './recipes'

export function ServingSizeSelect({setServingSize, servingSize, groceryList, setGroceryList}) {

    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function handleChange(event) {
        setServingSize(Number(event.target.value))
    }

    useEffect(() => {
        if (groceryList.length > 0) {
            const adjustedIngredients = recipes.flatMap(recipe => 
                recipe.ingredients.map(ingredient => ({
                    ...ingredient,
                    qty: ingredient.qty * servingSize,
                }))
            )
                
            setGroceryList(adjustedIngredients)
        } 
    }, [servingSize])
    
    

    return (
        <select name="servingSelect" value={servingSize} onChange={handleChange}>
            {options.map(num => (
                <option key={num} value={num}>{num}</option>
            ))}
        </select>
    )
}