import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaInstagram } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const links = [
  { id: 1, label: 'GitHub', icon: FaGithub, href: 'https://github.com/' },
  { id: 2, label: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/narendra21/' },
  { id: 3, label: 'Email', icon: FaEnvelope, href: 'mailto:narendra@example.com' },
  { id: 4, label: 'Code', icon: FaCode, href: 'https://github.com/' },
  { id: 5, label: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/' },
];

function SocialLinks({ size = 18, exclude = [] }) {
  const { darkMode } = useTheme();
  const visibleLinks = links.filter(({ label }) => !exclude.includes(label));

  return (
    <div className="flex items-center gap-3">
      {visibleLinks.map(({ id, label, icon: Icon, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`w-11 h-11 flex items-center justify-center rounded-xl border transition-all duration-200 hover:-translate-y-1 ${
            darkMode
              ? 'border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20'
              : 'border-black/10 bg-black/5 text-slate-600 hover:text-slate-900 hover:border-blue-400/50'
          }`}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
