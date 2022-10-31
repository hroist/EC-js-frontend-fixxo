import React from 'react'

const MenuCircleBtn = ({className, badgetext, icon, onClick}) => {
  return (
    <div onClick={onClick} className={`menu-link-circle c-content ${className}`}>
        <span className="position-absolute badge">
            {badgetext}
        </span>
        <i className={icon}></i>
  </div>
  )
}

export default MenuCircleBtn