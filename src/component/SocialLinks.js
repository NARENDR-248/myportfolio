import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

function SocialLinks() {
  const links = [
    {
      id: 1,
      text: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/narendra21/',
    },
    {
      id: 2,
      text: 'Github',
      icon: <FaGithub size={20} />,
      href: '#',
    },
    {
      id: 3,
      text: 'Instagram',
      icon: <FaInstagram size={20} />,
      href: '#',
    },
  ];

  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, text, icon, href }) => (
          <li
            key={id}
            className='flex justify-between items-center h-14 w-40 bg-gray-400 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'>
              <span className='mr-2'>{text}</span> {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
