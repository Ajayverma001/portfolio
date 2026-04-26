import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Wrench, Code2, Database, Layers } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="cat-icon" size={32} />,
      skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Framer Motion'],
      color: 'var(--neon-blue)'
    },
    {
      title: 'Backend Engineering',
      icon: <Server className="cat-icon" size={32} />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Firebase'],
      color: 'var(--neon-purple)'
    },
    {
      title: 'Database & Architecture',
      icon: <Database className="cat-icon" size={32} />,
      skills: ['MongoDB', 'Mongoose'],
      color: '#ff007f'
    },
    {
      title: 'Tools & Ecosystem',
      icon: <Wrench className="cat-icon" size={32} />,
      skills: ['Git & GitHub', 'VS Code', 'Postman', 'NPM/Yarn', 'Vite'],
      color: '#00ffaa'
    }
  ];

  const displayedCategories = showAllSkills ? skillCategories : skillCategories.slice(0, 2);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skill Universe
        </motion.h2>

        <div className="skills-bento">
          {displayedCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              className={`skill-category-card glass card-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={{ '--cat-color': category.color }}
            >
              <div className="cat-header">
                <div className="cat-icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="cat-skills">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {skillCategories.length > 2 && (
          <motion.div 
            className="view-more-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              onClick={() => setShowAllSkills(!showAllSkills)} 
              className="view-more-btn glow-on-hover glass"
            >
              {showAllSkills ? 'Show Less' : 'View All Skills'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
