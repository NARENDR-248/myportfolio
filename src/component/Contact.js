import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animation
            easing: 'ease-in-out', // Easing option
            once: true, // Animation will happen only once
        });
    }, []);

    return (
        <div 
            className='w-full min-h-screen bg-gradient-to-t from-slate-800 to-black text-white'
            data-aos="fade-up" // Applying AOS to the entire section
        >
            <div 
                className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'
                data-aos="fade-up"
            >
                <div>
                    <p 
                        className='text-3xl font-bold inline border-b-4 border-gray-300 p-2'
                        data-aos="zoom-in" // Zoom-in effect for title
                    >
                        Contact
                    </p>
                    <p 
                        className='py-6'
                        data-aos="fade-right" // Fade-right effect for subtext
                    >
                        Let's get in touch!
                    </p>
                </div>
                <div 
                    className='flex justify-center items-center'
                    data-aos="fade-up"
                >
                    <form action='https://getform.io/f/adryvwva' method='post'
                        className='flex flex-col w-full md:w-1/2 space-y-4'
                        data-aos="fade-left" // Fade-left effect for the form
                    >
                        <input 
                            type='text' 
                            placeholder='Enter your name' 
                            className='p-3 bg-transparent border-2 border-gray-400 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 transition duration-200' 
                        />
                        <input 
                            type='email' 
                            placeholder='Enter your email' 
                            className='p-3 bg-transparent border-2 border-gray-400 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 transition duration-200' 
                        />
                        <textarea 
                            name='message' 
                            placeholder='Enter your message' 
                            rows={10} 
                            className='p-3 bg-transparent border-2 border-gray-400 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300 transition duration-200' 
                        ></textarea>
                        <button 
                            className='bg-gradient-to-r from-blue-600 to-cyan-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 transition-transform duration-200 text-black font-semibold'
                            data-aos="fade-up" // Changed to "fade-up" to test AOS animation
                            data-aos-delay="500" // Optional delay to make it more visible
                        >
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
