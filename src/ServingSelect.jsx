import { useState } from "react";

export function ServingSizeSelect({setServingSize, servingSize}) {
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    function handleChange(event) {
        setServingSize(Number(event.target.value))
    }
   
    return (
        <select value={servingSize} onChange={handleChange}>
            {options.map(num => (
                <option key={num} value={num}>{num}</option>
            ))}
        </select>
    )
}