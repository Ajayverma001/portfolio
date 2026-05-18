import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_73pstxp',
      'template_006xuar',
      form.current,
      '3orYo0U1b764U85DK'
    )
      .then(() => {
        setStatus('Message sent successfully! ✅');
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setStatus('Failed to send message. ❌');
      });

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's build something amazing together!</h3>
            <p>
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/ajay-verma-ab7664330/" target="_blank" rel="noreferrer" className="social-icon glow-on-hover" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="https://github.com/Ajayverma001" target="_blank" rel="noreferrer" className="social-icon glow-on-hover" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:verajay426@gmail.com" className="social-icon glow-on-hover" aria-label="Email">
                <Mail size={28} />
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            className="contact-form glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="john@example.com" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Your message..." required></textarea>
            </div>

            <button type="submit" className="submit-btn glow-on-hover" disabled={status === 'Sending...'}>
              {status === 'Sending...' ? 'Sending...' : (
                <>Send Message <Send size={20} /></>
              )}
            </button>

            {status && status !== 'Sending...' && (
              <p
                className="form-status"
                style={{
                  textAlign: 'center',
                  color: status.includes('✅') ? '#00ffaa' : '#ff007f'
                }}
              >
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;