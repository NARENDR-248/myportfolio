import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCircleNotch,
  FaEnvelope,
  FaExclamationCircle,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validators = {
  name: (value) => (value.trim() ? '' : 'Please enter your name.'),
  email: (value) => {
    if (!value.trim()) return 'Please enter your email address.';
    return EMAIL_PATTERN.test(value.trim()) ? '' : 'Please enter a valid email address.';
  },
  message: (value) => (value.trim() ? '' : 'Please write a message.'),
};

const FIELDS = Object.keys(validators);

function Contact() {
  const { darkMode } = useTheme();
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);

  // The form posts natively, so the page navigates away on success; reset if the user comes back.
  useEffect(() => {
    const reset = () => setSending(false);
    window.addEventListener('pageshow', reset);
    return () => window.removeEventListener('pageshow', reset);
  }, []);

  const errors = Object.fromEntries(FIELDS.map((field) => [field, validators[field](values[field])]));

  const handleChange = (e) => setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleBlur = (e) => setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const handleSubmit = (e) => {
    const firstInvalid = FIELDS.find((field) => errors[field]);
    if (firstInvalid) {
      e.preventDefault();
      setTouched({ name: true, email: true, message: true });
      e.currentTarget.elements[firstInvalid].focus();
      return;
    }
    setSending(true);
  };

  const fieldClasses = (hasError) =>
    `w-full px-4 py-3 rounded-xl border bg-transparent text-sm focus:outline-none focus:ring-2 transition duration-200 ${
      hasError
        ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30'
        : darkMode
        ? 'border-white/10 hover:border-white/20 focus:border-blue-400 focus:ring-blue-400/30'
        : 'border-black/10 hover:border-black/20 focus:border-blue-400 focus:ring-blue-400/30'
    } ${darkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'}`;

  const renderField = (name, label, control) => {
    const error = touched[name] ? errors[name] : '';
    return (
      <div>
        <label htmlFor={`contact-${name}`} className="mb-1.5 block text-sm font-medium">
          {label}
        </label>
        {control(error)}
        {error && (
          <p id={`contact-${name}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
            <FaExclamationCircle size={11} /> {error}
          </p>
        )}
      </div>
    );
  };

  const commonProps = (name, error) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    required: true,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `contact-${name}-error` : undefined,
    className: fieldClasses(Boolean(error)),
  });

  return (
    <div className={`w-full py-16 ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-blue-400 mb-3">GET IN TOUCH</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Let's Build Something Together</h2>
          <p className={`max-w-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Open to opportunities, collaborations and challenging full-stack projects.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="md:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <FaEnvelope size={16} />
                </span>
                <a
                  href="mailto:narendra@example.com"
                  className="text-sm font-medium break-all hover:text-blue-400 transition-colors"
                >
                  narendra@example.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 shrink-0 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <FaMapMarkerAlt size={16} />
                </span>
                <span className="text-sm font-medium">Hyderabad, India</span>
              </div>
            </div>

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

          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            action="https://getform.io/f/adryvwva"
            method="post"
            noValidate
            onSubmit={handleSubmit}
            className={`md:col-span-3 space-y-5 p-6 sm:p-8 rounded-2xl border backdrop-blur-xl ${
              darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white shadow-sm'
            }`}
          >
            {renderField('name', 'Your Name', (error) => (
              <input type="text" placeholder="Your Name" autoComplete="name" {...commonProps('name', error)} />
            ))}
            {renderField('email', 'Your Email', (error) => (
              <input type="email" placeholder="Your Email" autoComplete="email" {...commonProps('email', error)} />
            ))}
            {renderField('message', 'Your Message', (error) => (
              <textarea placeholder="Your Message" rows={5} {...commonProps('message', error)} />
            ))}

            <motion.button
              type="submit"
              disabled={sending}
              whileHover={sending ? undefined : { scale: 1.02 }}
              whileTap={sending ? undefined : { scale: 0.98 }}
              className="group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {sending ? (
                <>
                  Sending <FaCircleNotch className="animate-spin" size={13} />
                </>
              ) : (
                <>
                  Send Message
                  <FaPaperPlane
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
