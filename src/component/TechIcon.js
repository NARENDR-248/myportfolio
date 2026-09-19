import React from 'react';
import { TECH } from '../utilis/techStack';

function TechIcon({ id, size = 20, className = '' }) {
  const tech = TECH[id];
  if (!tech) return null;
  const Icon = tech.icon;

  return (
    <Icon
      size={size}
      className={className}
      style={tech.color ? { color: tech.color } : undefined}
      aria-hidden="true"
    />
  );
}

export default TechIcon;
