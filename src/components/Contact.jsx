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
              <a href="https://www.linkedin.com/in/ajay-verma-ab7664330/" target="_blank" rel="noreferrer" className="social-icon glow-on-hover">
                LinkedIn
              </a>
              <a href="https://github.com/Ajayverma001" target="_blank" rel="noreferrer" className="social-icon glow-on-hover">
                GitHub
              </a>
              <a href="mailto:verajay426@gmail.com" className="social-icon glow-on-hover">
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