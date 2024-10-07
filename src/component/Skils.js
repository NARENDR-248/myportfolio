import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import html from '../asets/html.jpg';
import css from '../asets/css.png';
import js from '../asets/es6.png';
import react from '../asets/react.png';
import redux from '../asets/redux.jpg';
import node from '../asets/node js.png';
import express from '../asets/express.jpg';
import tailwindcss from '../asets/tailwindcss.png';

function Skils() {
    // Initialize AOS when component mounts
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing effect
            once: true, // Trigger animation only once
        });
    }, []);

    const imgs = [
        { id: 1, img: html, name: 'HTML' },
        { id: 2, img: css, name: 'CSS' },
        { id: 3, img: js, name: 'JavaScript (ES6)' },
        { id: 4, img: react, name: 'React' },
        { id: 5, img: redux, name: 'Redux' },
        { id: 6, img: node, name: 'Node.js' },
        { id: 7, img: express, name: 'Express' },
        { id: 8, img: tailwindcss, name: 'Tailwind CSS' },
    ];

    return (
        <div className='bg-gradient-to-t from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-300 p-2'>Skills</p>
                    <p className='py-6'>These are the skills I have:</p>
                </div>
                <div className='w-full grid grid-col-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 text-center py-8 px-12 sm:px-0'>
                    {
                        imgs.map(({ id, img, name }) => (
                            <div 
                                key={id} 
                                className='shadow-md shadow-gray-400 duration-200 hover:scale-105 py-3 rounded-lg w-40 mx-auto'
                                data-aos="fade-up" // Adding AOS animation
                            >
                                <img src={img} alt={name} className='w-20 mx-auto' />
                                <p className='mt-4'>{name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Skils;
