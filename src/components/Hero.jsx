import React from 'react'
import '../styles/App.scss'
import '../styles/Hero.scss'
import { Button } from './Button'
import { FaRegPlayCircle } from 'react-icons/fa'

import video from '../assets/videos/video-3.mp4'
//import hero from '../assets/images/img-home.jpg'

function Hero() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted />
            {/* <img src={hero} alt="Hero" className='hero' /> */}
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                >
                    WATCH TRAILER <FaRegPlayCircle />
                </Button>
            </div>
        </div>
    )
}

export default Hero
