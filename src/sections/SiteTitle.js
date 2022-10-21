import React from 'react'

const SiteTitle = ({title}) => {
  return (
    <section className="site-title">
        <div className="container-small">
            <div className="sales-banner-thin">
                <p>Get 25% OFF at the Fixxo Selection - Shop Now!</p>
            </div>
            <ul className="site-title-breadcrumb">
                <li><a href="index.html"><i className="fa-solid fa-house"></i> Home</a></li>
                <li>{title}</li>
            </ul>
        </div>
    </section>
  )
}

export default SiteTitle