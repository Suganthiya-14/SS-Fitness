import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>SS Fitness</h5>
        </span>
        <h2>Unleash the Inner <b>Fitness</b> Wizard: Transform your body, <b>Elevate</b> Your Life!</h2>
        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero