import React from 'react'
import { useParams } from 'react-router-dom'
import ImageSlider from '../components/ImageSlider'


const ProductDetails = ({item}) => {

    const slides = [
        {url: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg", title: "Shoe1" },
        {url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", title: "Shoe2" },
        {url: "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg", title: "Shoe3" },
        {url: "https://images.pexels.com/photos/1858404/pexels-photo-1858404.jpeg", title: "Shoe4" }
    ];

  return (
    <section className="product-details">
        <div className="container-small">
            <div className="product-details-card">
                <div className="sb-content-top">
                    {/* <div className="product-details-images">
                        <img className="large-image" src={item.imageName} alt={item.name} />
                        <img id="small-image1" src={item.imageName} alt={item.name} />
                        <img id="small-image2" src={item.imageName} alt={item.name} />
                        <img id="small-image3" src={item.imageName} alt={item.name} />
                    </div> */}

                    <div className="product-details-images">
                        <ImageSlider slides={slides} />
                    </div>

                    <div className="product-details-content">
                        <h1>{item.name}</h1>
                        <p>SKU: {item.articleNumber} BRAND: The Northland</p>
                        <div className="card-review-stars">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="card-original-price">{item.price}</p>
                        <p className="product-description">Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more) </p>
                        <div className="product-details-grid">
                            <div>Size:</div>
                            <div>Sizes buttons</div>
                        </div>
                        <div className="product-details-grid">
                            <div>Color:</div>
                            <div>Color dropdown</div>
                        </div>
                        <div className="product-details-grid">
                            <div>Quantity</div>
                            <div className="start-content gap">
                                <div>+ - counter</div>
                                <button className="button-forms">ADD TO CART</button>
                            </div>
                        </div>
                        <div className="product-details-grid">
                            <div>Share:</div>
                            <div className="start-content share-links">
                                <span className="fa-stack">
                                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                                    <i className="fa-brands fa-facebook-f fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                </span>
                                <span className="fa-stack">
                                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                                    <i className="fa-brands fa-instagram fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                </span>
                                <span className="fa-stack">
                                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                                    <i className="fa-brands fa-twitter fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                </span>
                                <span className="fa-stack">
                                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                                    <i className="fa-brands fa-google fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                </span>
                                <span className="fa-stack">
                                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                                    <i className="fa-brands fa-linkedin-in fa-stack-1x fa-inverse" style={{color: "Black"}}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-details-nav">
                    <ul className="product-details-nav-list gap start-content">
                        <li id="product-id-description" className="product-details-nav-item">Description</li>
                        <li id="product-id-additional" className="product-details-nav-item">Additional</li>
                        <li id="product-id-shipping" className="product-details-nav-item">Shipping & Return</li>
                        <li id="product-id-reviews" className="product-details-nav-item">Reviews</li>
                    </ul>

                    <div className="product-details-text">
                        <div id="product-id-description-text">
                            <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. </p>
                        </div>
                        <div id="product-id-additional-text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit fuga, in laborum voluptatem quas voluptates beatae molestias quia iusto saepe aliquam illo consequatur quo doloribus neque nostrum deleniti, cumque nesciunt!</p>
                        </div>
                        <div id="product-id-shipping-text">
                            <p>Shopping and return details</p>
                        </div>
                        <div id="product-id-reviews-text">
                            <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )


}

export default ProductDetails