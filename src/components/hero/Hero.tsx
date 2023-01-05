import React from 'react';
import './hero.css';
import { Button, Center } from '@mantine/core';

const Hero: React.FC = () => {

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
            <Button 
                variant="gradient" 
                radius="md" 
                styles = {() => ({
                    root: {
                        width: 120,
                        height: 40,
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: 15,
                        letterSpacing: 0.5,
                    }
                })} 
                gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                Explore
            </Button>
        </div>
        <div className='right'>
            <img src={hero} height='520px' width='665px'/>
        </div>
    </div>
  )
}

export default Hero