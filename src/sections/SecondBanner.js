import React from 'react'

const SecondBanner = () => {
  return (
    <section className="second-banner container sb-content">
        <div className="second-banner-left">
            <h1>Pamela Reif's<span>Top Picks</span></h1>
            <button className="button-theme-dark"> SHOP NOW</button>           
        </div>
        <div className="second-banner-right">
            <h1>Let's Be<span>Conscious</span></h1>
            <button className="button-theme-white">FLASH SALE</button>
        </div>
    </section>
  )
}

export default SecondBanner