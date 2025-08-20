import React from 'react';
import { motion } from 'framer-motion';
import "./footer.css";
import { PiLaptopThin } from "react-icons/pi";
import { FaHeart, FaCode, FaCoffee } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className='footer-main'>
      <div className="footer-content">
        <motion.div
          className="footer-info"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <div className="brand-icon">
              <FaCode />
            </div>
            <div className="brand-text">
              <h3 className="brand-name">Shaiq Ahmed</h3>
              <p className="brand-title">Full Stack Developer</p>
            </div>
          </div>
          
          <div className="footer-description">
            <p>
              Passionate about creating innovative web solutions with modern technologies. 
              Let's build something amazing together!
            </p>
          </div>
        </motion.div>

        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="copyright">
            <p className='footer-text'>
              © 2024 | Designed and developed with 
              <FaHeart className="heart-icon" />
              by Shaiq Ahmed
              <PiLaptopThin className="laptop-icon" />
            </p>
            <div className="tech-stack">
              <span className="tech-item">React</span>
              <span className="tech-separator">•</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-separator">•</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-separator">•</span>
              <span className="tech-item">Express</span>
            </div>
          </div>
          
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title="Back to top"
          >
            <FiArrowUp />
          </motion.button>
        </motion.div>

        <motion.div
          className="footer-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="quote-content">
            <FaCoffee className="quote-icon" />
            <p className="quote-text">
              "Code is like humor. When you have to explain it, it's bad." - Cory House
            </p>
          </div>
        </motion.div>
      </div>
      
      <div className="footer-background">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
