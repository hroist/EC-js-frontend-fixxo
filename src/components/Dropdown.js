import React, { useState } from 'react'

const Dropdown = ({colors = []}) => {

        const [dropdown, setDropdown] = useState(false)
        const handleDropdown = () => {
            setDropdown(!dropdown)
        }

        const [color, setColor] = useState("Choose a color")
        const chooseColor = (e) => {
            setColor(e.target.value)
            setDropdown(!dropdown)
        }

        return (
            <div>
                <button data-testid="dropdown" className="dropdown sb-content" onClick={handleDropdown}><span>{color}</span><i className="fa-regular fa-chevron-down"></i></button>
                {
                dropdown ? 
                <div className="dropdown-open">
                    <ul className="dropdown-list">
                        <li onClick={chooseColor}>{colors[0]}</li>
                        <li onClick={chooseColor}>{colors[1]}</li>
                        <li onClick={chooseColor}>{colors[2]}</li>
                        <li onClick={chooseColor}>{colors[3]}</li>
                        <li onClick={chooseColor}>{colors[4]}</li>
                    </ul>
                </div> 
                :  "" }
            </div>
        )
}

export default Dropdown