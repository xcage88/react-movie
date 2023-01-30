import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft, faArrowAltCircleRight, faCircle} from '@fortawesome/free-solid-svg-icons'

function Carousel({slider}) {

    // status current index
    const [currentIndex, setCurrentIndex] = useState(0)

    // slide ke kanan
    const goToNext = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? slider.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    // slide ke kiri
    const goToPrevios = () => {
        const lastSlide = currentIndex === slider.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // jumping slide berdasarkan index
    const jumpingSlide = (index) => {
        setCurrentIndex(index)
    }

    // variabel css
    const styleImage = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slider[currentIndex].src})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        transitionDuration: '1s',
        transform: 'scale(1.00)'
    }

    return (
        <div className='slider-container'>
            <div className='slider-main'>
                <div className='leftArrow' onClick={goToPrevios}><FontAwesomeIcon icon={faArrowAltCircleLeft} size='3x'/></div>
                <div className='rightArrow' onClick={goToNext}><FontAwesomeIcon icon={faArrowAltCircleRight} size='3x'/></div>
                <div style={styleImage}>
                    <div className='dots-container'>
                        {slider.map((slide, index) => {
                            return (
                                <div key={index} className='dots-style' onClick={() => jumpingSlide(index)}><FontAwesomeIcon icon={faCircle} size='1x' /></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel