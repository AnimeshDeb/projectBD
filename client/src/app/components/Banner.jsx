'use client';
import './Banner.css'
import { useState, useEffect } from 'react'

const Banner = () => {
    const [scrollY, setScrollY] = useState(0);

    // Function to update scroll position
    const handleScroll = () => {
        setScrollY(window.scrollY); // Capture the scroll position
    };

    // Adding event listener for scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className="banner">
            <img className='banner-img' src='fire_in_hand.png' style={{ top: `${40 + scrollY / 10}%` }} /* Adjust the scroll speed *//>
            <div className='banner-text'>
                <h1 className='banner-text-header'>Welcome to ProjectBD Website</h1>
                <p className='banner-text-body'>ProjectBD is a student-led non-profit organization, who are supporting Bangladesh Hindus against Genocide. We wish to be the voice of those who cannot speak. We wish to fight for those who cannot fight. We wish to be there for those who have no one.</p>
                <div className='banner-text-button-container'>
                    <button className='banner-text-button'>Learn more</button>
                </div>
            </div>
        </div>
    )
}; export default Banner