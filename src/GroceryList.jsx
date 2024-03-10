import { useState } from 'react';

export function GroceryList({groceryList}) {
     
    return (
        <div className='groceryListDiv'>
            <h3>Grocery List</h3>
            {groceryList.map((item, index) => (
                <div  key={index} className='flex alignRight'>
                    <p>{item.qty} {item.unit} {item.name}</p>
                    <button>❌</button>
                </div>
            ))}
        </div>
    )
}