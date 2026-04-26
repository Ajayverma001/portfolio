import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Experience', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container nav-content">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home">Ajay <span>Verma</span></a>
        </motion.div>

        <ul className="nav-links desktop-links">
          {links.map((link, i) => (
            <motion.li 
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a href={`#${link.toLowerCase()}`} className="nav-link">
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="theme-toggle glow-on-hover" onClick={() => setIsLightMode(!isLightMode)}>
            {isLightMode ? <Moon size={24} /> : <Sun size={24} />}
          </div>

          {/* Mobile Menu Button */}
          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <motion.div 
          className="mobile-menu glass"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="nav-links mobile-links">
            {links.map((link) => (
              <li key={link} onClick={() => setIsOpen(false)}>
                <a href={`#${link.toLowerCase()}`} className="nav-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
