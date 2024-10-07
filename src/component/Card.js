import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Card({ id, src }) {
    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing of the animation
            once: true, // Run animation only once
        });
    }, []);

    return (
        <div
            key={id}
            className='shadow-md shadow-gray-400 rounded-lg'
            data-aos="fade-up" // Add AOS animation attribute
        >
            {/* Image Container with fixed width and height */}
            <img
                src={src}
                alt=''
                className='rounded-md h-48 w-full object-cover duration-150 hover:scale-105'
            />
            <div className='flex justify-center items-center'>
                <button className='w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105'>Code</button>
                <button className='w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105'>See</button>
            </div>
        </div>
    );
}

export default Card;
