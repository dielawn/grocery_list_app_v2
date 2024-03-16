import './AisleSelect.css'
import { useEffect, useState } from 'react'

export function AisleSelect({aisleOrder, sortList }) {
    
    const [selectedAisle, setSelectedAisle] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
 

    const setAisle = (e) => {
        setSelectedAisle(e.target.value)
    }

    const setIndex = (e) => {
        setSelectedIndex(parseInt(e.target.value, 10))
    }

   

   


    return (
        <div>
            <select value={selectedAisle} onChange={setAisle}>
                {aisleOrder.map((aisle, index) => (
                    <option key={index} value={aisle}>{aisle}</option>
                ))}
            </select>
            <select value={selectedIndex} onChange={setIndex}>
                {Array.from({length: aisleOrder.length}, (_, i) => i).map(index => (
                    <option key={index} value={index}>{index + 1}</option>
                ))}
            </select>
            <button onClick={() => sortList()}>Update Order</button>
        </div>
    )
}