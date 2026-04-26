import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, MapPin, Mail } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    { icon: <Terminal size={32} />, title: 'Frontend', desc: 'Crafting responsive, interactive, and highly animated user interfaces.' },
    { icon: <Code size={32} />, title: 'Backend', desc: 'Building scalable APIs and robust server-side architecture.' },
    { icon: <Cpu size={32} />, title: 'Problem Solving', desc: 'Translating complex requirements into intelligent software solutions.' }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          {/* Top Grid: Text on Left, Photo on Right */}
          <div className="about-top-grid">
            <motion.div 
              className="about-text-column"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="about-subtitle">Software Engineer & Web Developer</h3>
              <a href="mailto:verajay426@gmail.com" className="about-email">
                <Mail size={16} /> verajay426@gmail.com
              </a>

              <p className="about-desc">
I am a passionate B.Tech student and web developer with a strong interest in building modern, scalable, and user-friendly applications. I enjoy turning complex problems into simple, interactive solutions using technologies like React.js, Node.js, and MongoDB.              </p>
              <p className="about-desc">
I am always eager to learn new technologies, explore innovative ideas, and continuously improve my development skills. My goal is to create impactful digital solutions that combine performance, usability, and creativity.              </p>

              <div className="about-location">
                <MapPin size={18} className="location-icon" />
                <span>Bhopal, MP, India</span>
              </div>
            </motion.div>

            <motion.div 
              className="about-image-column"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="image-wrapper glow-on-hover">
                {/* Placeholder Image - The user can change the src to their actual photo */}
                <img 
                  src="image/ajaypt.jpeg" 
                  alt="Ajay Verma" 
                  className="profile-photo"
                />
                <div className="image-overlay"></div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Cards */}
          <div className="about-cards">
            {cards.map((card, index) => (
              <motion.div 
                key={index} 
                className="about-card glass glow-on-hover"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
