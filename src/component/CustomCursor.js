import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, [data-cursor-hover]';

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 300, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 300, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reducedMotion) return;

    setEnabled(true);

    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest ? e.target.closest(INTERACTIVE_SELECTOR) : null;
      setHovering(Boolean(target));
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[200] rounded-full border border-blue-400/60 mix-blend-difference"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{ width: hovering ? 44 : 20, height: hovering ? 44 : 20, opacity: hovering ? 0.9 : 0.6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    />
  );
}

export default CustomCursor;
