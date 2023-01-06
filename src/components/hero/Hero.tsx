import React from 'react';
import './hero.css';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {

    const hero = require('../../assets/ashe.png');
    const navigate = useNavigate();

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
                    onClick={() => navigate('/history')}
                    styles = {() => ({
                        root: {
                            width: 120,
                            height: 40,
                            fontFamily: 'Montserrat',
                            fontWeight: 700,
                            fontSize: 15,
                            letterSpacing: 0.5,
                        }
                    })} 
                    mt={30}
                    gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>
                    Explore
                </Button>
            </div>
            <div className='right'>
                <img src={hero} height='520px' width='665px' alt="league of legends champion"/>
            </div>
        </div>
    )
}

export default Hero