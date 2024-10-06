import React from 'react';

function About() {
  return (
    <div className='w-full h-screen bg-gradient-to-t from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <div className='mt-4'>
          <p className='text-xl'>
            Hi, I'm Narendra! Dive into the world of web development with me, where I blend technology and creativity to craft user-friendly applications. With a background in Computer Science and a knack for front-end technologies including React, JavaScript, and CSS, my ambition is to enhance user experiences on the digital platform.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
