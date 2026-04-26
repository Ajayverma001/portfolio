import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending...');
    
    const formData = new FormData(event.target);
    // Be sure to replace this with your actual Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully! ✅');
        event.target.reset();
      } else {
        setStatus('Failed to send message. ❌');
      }
    } catch (error) {
      setStatus('Error occurred while sending. ❌');
    }
    
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
            <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/ajay-verma-ab7664330/" target="_blank" rel="noreferrer" className="social-icon glow-on-hover">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/Ajayverma001" target="_blank" rel="noreferrer" className="social-icon glow-on-hover">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-.3 6-1.5 6-6.3a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0 .1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0 .1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 4.8 3 6 6 6.3-.3.3-.6.8-.6 1.5V22"></path>
                  <path d="M8 20c0 0-3 1-4-1"></path>
                </svg>
              </a>
              <a href="mailto:verajay426@gmail.com" className="social-icon glow-on-hover">
                <Mail size={28} />
              </a>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Hello, I'd like to talk about..." required></textarea>
            </div>
            
            <button type="submit" className="submit-btn glow-on-hover" disabled={status === 'Sending...'}>
              {status === 'Sending...' ? 'Sending...' : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
            
            {status && status !== 'Sending...' && (
              <p className="form-status" style={{textAlign: 'center', color: status.includes('✅') ? '#00ffaa' : '#ff007f'}}>{status}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
