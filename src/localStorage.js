function saveToLocalStorage(groceryList, recipeList) {
    // clearLocalStorage()
    groceryList.forEach((item, index) => {
        let itemKey = `ingredient${index}`;
        let itemValue = JSON.stringify({
            name: item.name, 
            qty: item.qty, 
            unit: item.unit, 
            aisle: item.aisle 
        })
        localStorage.setItem(itemKey, itemValue)
    })
    recipeList.forEach((item, index) => {
        let itemKey = `recipe${index}`
        let itemValue = JSON.stringify(item)
        console.log(`itemValue: ${itemValue}`)
        localStorage.setItem(itemKey, itemValue)
    })
}



