import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Building Smart and Scalable Web Solutions";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Particles/Glows */}
      <div className="glow-sphere sphere-1"></div>
      <div className="glow-sphere sphere-2"></div>

      <div className="container hero-content">
        <motion.p 
          className="greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi there, I'm
        </motion.p>
        
        <motion.h1 
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Ajay Verma
        </motion.h1>
        
        <motion.h2 
          className="role"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Software Engineer <span className="highlight">&</span> Web Developer
        </motion.h2>

        <div className="tagline-container">
          <p className="tagline">
            {text}<span className="cursor">|</span>
          </p>
        </div>

        <motion.div 
          className="cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary glow-on-hover">
            View Projects <ChevronRight size={20} />
          </a>
          <a href="#contact" className="btn btn-secondary glow-on-hover">
            Contact Me <Download size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
