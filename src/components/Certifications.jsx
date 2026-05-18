import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, X } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const certsList = [
    {
      title: 'Full Stack Web Development Certificate',
      issuer: 'sheryians coding school',
      date: '14/07/2025',
      link: '#',
      color: 'var(--neon-blue)',
      image: '/image/Full Stack Web Development Certificate.png'
    },
    {
      title: 'Apply AI: Analyze Customer Reviews',
      issuer: 'Cisco Networking Academy program',
      date: '3/04/2026',
      link: '#',
      color: 'var(--neon-purple)',
      image: '/image/c2.png'
    },
    {
      title: 'C Programming',
      issuer: 'sheryians coding school',
      date: '17/06/2024',
      link: '#',
      color: 'var(--neon-green)',
      image: '/image/C Programming.png'
    },
    {
      title: 'From Sensors to Intelligence: loT Meets GenAl on',
      issuer: 'Tinker Stream Innovations, Nagpur',
      date: '8/05/2026 & 9/05/2026',
      link: '#',
      color: 'var(--neon-orange)',
      image: 'image/IOT.jpeg'
    },
    {
      title: 'Successfully developed the "SEO - SISTec Event Organizer" resource management portal.',
      issuer: 'Sagar Institute of Science and Technology',
      date: '02/05/2026',
      link: '#',
      color: 'var(--neon-pink)',
      image: '/image/seo.jpeg'
    }
  ];

  const displayedCerts = showAll ? certsList : certsList.slice(0, 2);

  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Verified Credentials
        </motion.h2>

        <div className="cert-hologram-grid">
          {displayedCerts.map((cert, index) => (
            <motion.div 
              className="cert-ticket glass"
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              style={{ '--cert-color': cert.color }}
            >
              <div className="ticket-edge-left"></div>
              
              <div className="cert-top">
                <div className="cert-icon-wrapper">
                  <Award size={40} className="cert-icon" />
                </div>
                <div className="verified-badge">
                  <ShieldCheck size={20} /> Verified
                </div>
              </div>
              
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>

              <div className="cert-footer">
                <div className="cert-date">
                  <span className="label">Issued:</span> {cert.date}
                </div>
                <button 
                  onClick={() => setSelectedCert(cert)} 
                  className="cert-link glow-on-hover"
                  style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                >
                  View Credential <ExternalLink size={18} />
                </button>
              </div>
              
              <div className="ticket-shine"></div>
            </motion.div>
          ))}
        </div>

        {certsList.length > 2 && (
          <motion.div 
            className="view-more-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              onClick={() => setShowAll(!showAll)} 
              className="view-more-btn glow-on-hover glass"
            >
              {showAll ? 'Show Less' : 'View All Credentials'}
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ '--cert-color': selectedCert.color }}
            >
              <button 
                className="close-btn"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>
              <div className="cert-modal-header">
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.issuer}</p>
              </div>
              <div className="cert-modal-image-container">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="cert-modal-image" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
