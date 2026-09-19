import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import todo from '../asets/todo_img.png';
import weather from '../asets/weather.jpg';
import movieapp from '../asets/movieapp.jpg';
import petstore from '../asets/petstore.jpeg';
import Card from './Card';
import ProjectModal from './ProjectModal';
import { useTheme } from './ThemeContext';

const portfolio = [
  {
    id: 1,
    src: todo,
    title: 'To-Do List',
    category: 'FRONTEND',
    desc: 'A simple and responsive To-Do app to manage daily tasks.',
    tags: ['React', 'LocalStorage'],
    problem: 'Needed a lightweight way to track daily tasks without setting up a backend.',
    features: [
      'Add, complete and delete tasks',
      'Tasks persist locally between sessions',
      'Responsive layout for mobile and desktop',
    ],
  },
  {
    id: 2,
    src: weather,
    title: 'Weather App',
    category: 'FRONTEND',
    desc: 'Real-time weather information using public API.',
    tags: ['React', 'API Integration'],
    problem: 'Wanted quick, real-time weather lookups without a cluttered interface.',
    features: [
      'Live weather data from a public API',
      'Search weather by city',
      'Clean, responsive weather display',
    ],
  },
  {
    id: 3,
    src: petstore,
    title: 'Pet Store App',
    category: 'FRONTEND',
    desc: 'A pet store storefront concept with product categories and services.',
    tags: ['React', 'UI Design'],
    problem: 'Practiced building an e-commerce style storefront UI.',
    features: [
      'Product category browsing',
      'Service highlights section',
      'Responsive storefront layout',
    ],
  },
  {
    id: 4,
    src: movieapp,
    title: 'Movie App',
    category: 'FRONTEND',
    desc: 'Browse popular movies with search functionality.',
    tags: ['React', 'API Integration'],
    problem: 'Wanted an easy way to browse and search popular movies.',
    features: [
      'Search functionality',
      'Movie grid with poster art',
      'Responsive layout',
    ],
  },
];

// Every project so far is frontend-only, so the heading only claims "Full-Stack" once a project
// tagged category: 'FULL STACK' (with real codeHref/liveHref) is added above.
const hasFullStackProject = portfolio.some(({ category }) => category === 'FULL STACK');

function Portfolio() {
  const { darkMode } = useTheme();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className={`w-full py-16 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-10">
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-400 mb-3">FEATURED PROJECTS</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              {hasFullStackProject ? 'Featured Full-Stack Projects' : 'Featured Projects'}
            </h2>
          </div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            View All Projects <FaArrowRight size={12} />
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolio.map(({ id, ...rest }) => (
            <Card key={id} {...rest} onOpen={() => setActiveProject({ id, ...rest })} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
