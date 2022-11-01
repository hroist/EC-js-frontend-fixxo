import React, { useState } from 'react'

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const sliderStyles = {
        height: '100%',
        position: 'relative'
    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    }
    const leftArrowStyles = {
        position: "absolute",
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
    }
    const rightArrowStyles = {
        position: "absolute",
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        zIndex: 1,
        cursor: "pointer",
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const thumbnailsStyles = {
        display: "flex",
        justifyContent: "space-between",
        gap: "0.2rem",
        marginTop: "0.2rem",
    }

    const thumbnailStyles = {
        height: "100px",
        width: `calc( 100% / ${slides.length} )`,
        cursor: "pointer",
        objectFit: "cover",
    }

    const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
    }

    return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>
            {"<"}
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
            {">"}
        </div>
        <div style={slideStyles}></div>
        <div style={thumbnailsStyles}>
            {slides.map((slide, slideIndex) => (
                <img style={thumbnailStyles} key={slideIndex} src={slide.url} onClick={() => goToSlide(slideIndex)} />
            ))}
        </div>
    </div>
  )
}

export default ImageSlider