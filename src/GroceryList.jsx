import { useState } from 'react';

export function GroceryList({groceryList}) {
     
    return (
        <div className='groceryListDiv'>
            <h3>Grocery List</h3>
            {groceryList.map((item, index) => (
                <div  key={index} className='flex alignRight'>
                    <p className='alignLeft'>{item.qty} {item.unit}</p>
                    <p className='alignRight'>{item.name}</p>
                    <button>❌</button>
                </div>
            ))}
        </div>
    )
}