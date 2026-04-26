import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          Ajay <span>Verma</span>
        </div>
        <p className="copyright">
          &copy; {currentYear} Ajay Verma  All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
