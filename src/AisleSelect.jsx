import './AisleSelect.css'
import { useState } from 'react'

export function AisleSelect({ groceryList }) {
    const defaultOrder = ['dairy', 'freezer', 'cheese', 'snack', 'butcher', 'ethnic', 'noodle',  'canned', 'baking', 'cereal', 'condiment', 'bakery', 'produce', 'nutrition', '']
    const [aisleOrder, setAisleOrder] = useState(defaultOrder)
    const [selectedAisle, setSelectedAisle] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)

    const setAisle = (e) => {
        setSelectedAisle(e.target.value)
    }

    const setIndex = (e) => {
        setSelectedIndex(parseInt(e.target.value, 10))
    }

    const updateAisleOrder = () => {
        const newOrder = [...aisleOrder]
        const currentIndex = newOrder.indexOf(selectedAisle)
        if (currentIndex >= 0) {
            newOrder.splice(currentIndex, 1)
            newOrder.splice(selectedIndex, 0, selectedAisle)
            setAisleOrder(newOrder)
        }
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
            <button onClick={updateAisleOrder}>Update Order</button>
        </div>
    )
}