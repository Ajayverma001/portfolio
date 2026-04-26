import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'hackathon',
      title: 'Hackathon Winner – Rising India Hackathon 1.0',
      organization: 'Nagpur Institute of Technology (NIT)',
      date: 'Apr, 2026',
      desc: 'A smart EV Fleet Management system, delivering an efficient and sustainable mobility solution.',
      icon: <Trophy size={24} />
    },
    {
      type: 'work',
      title: 'Full Stack Web Developer (Intern)',
      organization: 'Tech Innovators',
      date: 'July 2025 - Present',
      desc: 'Developing scalable React applications and building efficient REST APIs.',
      icon: <Briefcase size={24} />
    },
    {
      type: 'edu',
      title: 'B.Tech in Computer Science',
      organization: 'Sagar Institute of Science and Technology',
      date: '2023 - 2027',
      desc: 'Specializing in Web Development and Software Engineering principles.',
      icon: <GraduationCap size={24} />
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div 
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-icon glow-on-hover">
                {item.icon}
              </div>
              <div className="timeline-content glass">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <h4 className="timeline-org">{item.organization}</h4>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
