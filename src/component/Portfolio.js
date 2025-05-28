import React from 'react';
import todo from '../asets/todo_img.png';
import weather from '../asets/weather.jpg';
import movieapp from '../asets/movieapp.jpg';
import pet from '../asets/petstore.jpeg';
import Card from './Card';
import { useTheme } from './ThemeContext'; // Import useTheme from ThemeContext

function Portfolio() {
    const { darkMode } = useTheme(); // Access darkMode from ThemeContext
    const portfolio = [
        {
            id: 1,
            src: todo,
        },
        {
            id: 2,
            src: weather,
        },
        {
            id: 3,
            src: pet,
        },
        {
            id: 4,
            src: movieapp,
        },
    ];

    return (
        <div className={`h-screen w-full ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 to-black text-white'
          : 'bg-gradient-to-b from-gray-100 to-white text-black'
      }`}>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='font-bold text-gray-400 text-3xl inline border-b-4 border-gray-200'>Projects</p>
                    <p className='py-3'>See my work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0'>
                {portfolio.map(({ id, src }) => (
                        <Card key={id} src={src} id={id} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
