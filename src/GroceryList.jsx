import { useState } from 'react';

export function GroceryList({groceryList, setGrocerList}) {

    function removeItem(itemName) {
        //create a new array excluding itemName
        const newList = groceryList.filter(item => item.name !== itemName)
        setGrocerList(newList)
    }
     
    return (
        <div >
            <h3>Grocery List</h3>
            {groceryList.map((item, index) => (
                <div  key={index} className='flex alignRight'>
                    <p className='alignLeft'>{parseFloat(item.qty.toFixed(2))} {item.unit}</p>
                    <p className='alignRight'>{item.name}</p>
                    <button onClick={() => removeItem(item.name)}>❌</button>
                </div>
            ))}
        </div>
    )
}