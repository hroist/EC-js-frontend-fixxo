import React from 'react'
import womanSitting from '../assets/images/placeholders/woman-sitting.svg'
import manSitting from '../assets/images/placeholders/man-sitting.svg'
import ButtonThemeColor from '../components/ui/ButtonThemeColor'

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="container">
        <img src={womanSitting} alt="Silhuette of woman sitting."/>
        <div className="showcase-text c-content">
            <h1>SALE UP <br/>To 50% Off</h1>
            <p>Online shopping free home delivery over $100</p>
            <ButtonThemeColor buttontext="SHOP NOW" />
        </div>
        <img src={manSitting} alt="Silhuette of man sitting down."/>
      </div>
    </section>
  )
}

export default Showcase