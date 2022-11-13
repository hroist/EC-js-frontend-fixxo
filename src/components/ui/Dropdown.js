import React, { useState } from 'react'

const Dropdown = ({colors = []}) => {

        const [dropdown, setDropdown] = useState(false)
        const handleDropdown = () => {
            setDropdown(!dropdown)
        }

        const [color, setColor] = useState("Choose a color")
        const chooseColor = (e) => {
            console.log(e.target)
            console.log(e.target.value)
            setColor(e.target.innerHTML)
            setDropdown(!dropdown)
        }

        return (
            <div>
                <button data-testid="dropdown" className="dropdown sb-content" onClick={handleDropdown}><span>{color}</span><i className="fa-regular fa-chevron-down"></i></button>
                {
                dropdown ? 
                <div className="dropdown-open">
                    <select data-testid="dropdown-options" className="dropdown-list">
                        <option key={colors[0]} value={colors[0]} onClick={chooseColor}>{colors[0]}</option>
                        <option key={colors[1]} value={colors[1]} onClick={chooseColor}>{colors[1]}</option>
                        <option key={colors[2]} value={colors[2]} onClick={chooseColor}>{colors[2]}</option>
                        <option key={colors[3]} value={colors[3]} onClick={chooseColor}>{colors[3]}</option>
                    </select>
                </div> 
                :  "" }
            </div>
        )
}

export default Dropdown