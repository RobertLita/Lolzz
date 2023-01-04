import React from 'react';
import './hero.css';

const Hero = () => {

  const hero = require('../../assets/ashe.png');

  return (
    <div className='hero_container'>
        <div className='left'>
            <div className='title_container'>
                <p className='title'>Track your League of Legends history</p>
            </div>
            <div className='subtitle_container'>
                <p className='subtitle'>Get insights into your performance and improve your skills</p>
            </div>
            <button className='search_button'>Explore</button>
        </div>
        <div className='right'>
            <img src={hero} height='520px' width='665px'/>
        </div>
    </div>
  )
}

export default Hero