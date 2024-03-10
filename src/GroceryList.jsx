import proteins from './ingredients/proteins.json';
import produce from './ingredients/produce.json';
import grain from './ingredients/grains.json';
import sauce from './ingredients/sauce.json';
import neccessities from './ingredients/necessities.json';
import bakingGoods from './ingredients/baking.json';
import cannedGoods from './ingredients/canned.json';
import driedGoods from './ingredients/dried.json';
import seasoning from './ingredients/seasoning.json';
import dairy from './ingredients/dairy.json';
import snack from './ingredients/snack.json';
import frozenFood from './ingredients/frozen.json';

import { useState } from 'react';

export function GroceryList() {
        const [groceryList, setGroceryList] = useState([])
        const [recipeList, setRecipeList] = useState([])

       function addToLists(recipeName) {
        addToGroceryList(groceryList)
        addToRecipeList(recipeName)
       }

       function addToRecipeList(newRecipe) {
        const newList = [...recipeList, newRecipe]
        setRecipeList(newList)
       }

       function addToGroceryList(groceryList) {
        const consolidatedList = {}
        groceryList.forEach((item) => {
            const key = `${item.unit} ${item.name}`;
            if (key in consolidatedList) {
                consolidatedList[key].qty += item.qty;
            } else {
                consolidatedList[key] = {...item};
            }
        })
        const finalList = Object.values(consolidatedList)
        setGroceryList(finalList)
       }


    return (
        <div>

        </div>
    )
}