import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import TechIcon from './TechIcon';
import { TECH } from '../utilis/techStack';
import { useTheme } from './ThemeContext';

const currentRole = {
  role: 'Associate Software Engineer',
  company: 'Pirnav Software Solutions Pvt. Ltd.',
  duration: 'Apr 21, 2024 – Present',
  location: 'Hyderabad / Remote',
  project: {
    name: 'KiniEduHub / Pirnav Edutech',
    domain: 'Education Technology',
    summary: 'Education technology platform with Student, Mentor, Organization, and Admin workflows.',
    modules: [
      'Student Dashboard',
      'Mentor Dashboard',
      'Organization Dashboard',
      'Admin Dashboard',
      'Course Management',
      'Assessments',
      'Live Classes',
      'Attendance',
      'Permission Management',
      'AI Career Coach',
      'Student Journey / Learning Workflows',
    ],
    tech: ['react', 'javascript', 'redux', 'router', 'tailwind', 'mui', 'bootstrap', 'framer', 'rest', 'firebase'],
  },
  responsibilities: [
    'Develop and maintain responsive web applications using React.js and JavaScript (ES6+).',
    'Build reusable and modular React components across multiple application modules.',
    'Develop dashboards and role-based interfaces for Student, Mentor, Organization, and Admin workflows.',
    'Integrate React applications with REST APIs and work with real backend API data.',
    'Manage application state using Redux Toolkit and application routing using React Router.',
    'Implement authentication, authorization, and role-based and permission-based UI behavior.',
    'Develop workflows for courses, assessments, live classes, attendance, and permission management.',
    'Build responsive and accessible interfaces using Tailwind CSS, Material UI, and Bootstrap.',
    'Implement interactive UI experiences and animations using Framer Motion.',
    'Debug API integration issues, runtime errors, permission-related issues, and data-rendering problems.',
    'Troubleshoot frontend-to-backend integration issues and API response handling.',
    'Improve component reusability, UI consistency, responsiveness, and application maintainability.',
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Experience() {
  const { darkMode } = useTheme();
  const muted = darkMode ? 'text-slate-400' : 'text-slate-500';
  const label = `text-xs font-semibold tracking-widest uppercase mb-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`;
  const chip = `rounded-full border px-3 py-1 text-xs font-medium ${
    darkMode ? 'border-white/10 bg-slate-950/60 text-slate-300' : 'border-black/10 bg-slate-50 text-slate-700'
  }`;

  return (
    <div className={`w-full py-16 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-blue-400 mb-3">EXPERIENCE</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">Professional Experience</h2>
          <p className={`text-sm ${muted}`}>Growth through learning and experience.</p>
        </div>

        {/* Current software role, with its project */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className={`rounded-3xl border p-6 sm:p-8 backdrop-blur-xl ${
            darkMode
              ? 'border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-white/5 to-purple-500/10'
              : 'border-blue-200 bg-white shadow-sm'
          }`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30">
                <FaBriefcase size={16} />
              </span>
              <div>
                <h3 className="text-xl font-bold">{currentRole.role}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm font-medium text-blue-400">
                  <FaBuilding size={12} /> {currentRole.company}
                </p>
              </div>
            </div>
            <span className="rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
              Current
            </span>
          </div>

          <div className={`mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm ${muted}`}>
            <span className="inline-flex items-center gap-2">
              <FaCalendarAlt size={12} /> {currentRole.duration}
            </span>
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt size={12} /> {currentRole.location}
            </span>
          </div>

          <div className={`my-6 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`} />

          <p className={label}>Project</p>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h4 className="text-lg font-semibold">{currentRole.project.name}</h4>
            <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
              {currentRole.project.domain}
            </span>
          </div>
          <p className={`mb-8 text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {currentRole.project.summary}
          </p>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className={label}>Responsibilities</p>
              <ul className="space-y-2.5">
                {currentRole.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-blue-400" size={13} />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8 lg:col-span-2">
              <div>
                <p className={label}>Key Modules</p>
                <ul className="flex flex-wrap gap-2">
                  {currentRole.project.modules.map((module) => (
                    <li key={module} className={chip}>
                      {module}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className={label}>Technologies</p>
                <ul className="flex flex-wrap gap-2">
                  {currentRole.project.tech.map((id) => (
                    <li key={id} className={`inline-flex items-center gap-1.5 ${chip}`}>
                      <TechIcon id={id} size={12} />
                      {TECH[id].name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
