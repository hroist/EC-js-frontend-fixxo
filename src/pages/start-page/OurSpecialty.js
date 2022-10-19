import React from 'react'
import placeholder from '../../assets/images/placeholders/specialty-card-placeholder.png'

const OurSpecialty = () => {
  return (
    <section className="our-specialty">
        <div className="container">
            <h1 className="section-title txt-c">Our Specialty</h1>
            <div className="our-specialty-grid">
                <div className="specialty-card">
                    <div className="specialty-card-text">
                        <h3>
                            Track Your Order
                        </h3>
                        <a href="#">Get started {">"}</a>
                    </div>
                    <img src={placeholder} alt="Product image placeholder" />
                </div>
                <div className="specialty-card">
                    <div className="specialty-card-text">
                        <h3>
                            Make a Return
                        </h3>
                        <a href="#">Get Started {">"}</a>
                    </div>
                    <img src={placeholder} alt="Product image placeholder" />
                </div>
                <div className="specialty-card">
                    <div className="specialty-card-text">
                        <h3>
                            Request a Price Adjustment
                        </h3>
                        <a href="#">Get Started {">"}</a>
                    </div>
                    <img src={placeholder} alt="Product image placeholder" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurSpecialty