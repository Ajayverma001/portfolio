import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'SISTec Event Organizer',
            description: 'An institutional web app for booking campus venues. Features role-based access control, conflict resolution logic, and administrative dashboard for approvals.',
            techStack: ['React.js', 'TailwindCSS', 'Node.js', 'MongoDB'],
            links: { live: 'https://seo.sistec.ac.in/' }
        },
        {
            title: 'HallucinationDetector',
            description: 'Hallucination detection system that compares outputs from multiple AI models to evaluate response reliability and accuracy.',
            techStack: ['React.js', 'TailwindCSS', 'Node.js', 'MongoDB'],
            links: { live: 'https://hallucination-detector.vercel.app/auth' }
        },
        {
            title: 'Feedback-System',
            description: 'Developed a web-based feedback system to collect, manage, and analyze user responses, featuring customizable forms, user authentication, and admin analytics for better decision-making.',
            techStack: ['React.js', 'TailwindCSS', 'Node.js', 'MongoDB'],
            links: { live: 'https://campus-insights-9k33.onrender.com' }
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-container">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card glass"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="tech-stack">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.links.live} className="icon-link glow-on-hover">
                                        <ExternalLink size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
