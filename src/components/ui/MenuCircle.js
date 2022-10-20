import React from 'react'

const MenuCircle = ({className, badgetext, icon}) => {
  return (
    <div className={`menu-link-circle c-content ${className}`}>
        <span className="position-absolute badge">
            {badgetext}
        </span>
        <i className={icon}></i>
  </div>
  )
}

export default MenuCircle