import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Contact() {
  const { darkMode } = useTheme();

  const inputClasses = `w-full p-3 rounded-xl border bg-transparent placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition duration-200 ${
    darkMode
      ? 'border-white/10 text-white placeholder-slate-500 focus:border-blue-400'
      : 'border-black/10 text-slate-900 placeholder-slate-400 focus:border-blue-400'
  }`;

  return (
    <div className={`w-full py-16 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-blue-400 mb-3">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Let's Work Together</h2>
          <p className={`max-w-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm always open to discussing new opportunities, interesting projects or
            collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <FaEnvelope size={16} />
              </span>
              <a href="mailto:narendra@example.com" className="text-sm font-medium hover:text-blue-400 transition-colors">
                narendra@example.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <FaMapMarkerAlt size={16} />
              </span>
              <span className="text-sm font-medium">Hyderabad, India</span>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            action="https://getform.io/f/adryvwva"
            method="post"
            className={`md:col-span-1 space-y-4 p-6 rounded-2xl border backdrop-blur-xl ${
              darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-sm'
            }`}
          >
            <input type="text" name="name" placeholder="Your Name" className={inputClasses} required />
            <input type="email" name="email" placeholder="Your Email" className={inputClasses} required />
            <textarea name="message" placeholder="Your Message" rows={5} className={inputClasses} required />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:scale-[1.02] transition-transform duration-200"
            >
              Send Message <FaPaperPlane size={13} />
            </button>
          </motion.form>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="flex items-center justify-center"
          >
            <p className={`font-signture text-3xl leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-500'}`}>
              "Good Developers
              <br />
              Build Solutions.
              <br />
              Great Developers
              <br />
              Build Opportunities."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
