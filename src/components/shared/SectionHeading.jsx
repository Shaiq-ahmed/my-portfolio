import React from 'react';
import { motion } from 'framer-motion';
import './SectionHeading.css';

const SectionHeading = ({ 
  title, 
  subtitle, 
  description, 
  className = '',
  variant = 'primary',
  centered = true 
}) => {
  const headingVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className={`section-heading ${variant} ${centered ? 'centered' : ''} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div 
        className="heading-container"
        variants={headingVariants}
      >
        <div className="heading-badge">
          <span className="badge-text">{title}</span>
          <div className="badge-glow"></div>
        </div>
        
        {subtitle && (
          <h2 className="section-title">
            {subtitle}
          </h2>
        )}
      </motion.div>
      
      {description && (
        <motion.p 
          className="section-description"
          variants={subtitleVariants}
        >
          {description}
        </motion.p>
      )}
      
      <motion.div 
        className="heading-divider"
        initial={{ width: 0 }}
        whileInView={{ width: "100px" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default SectionHeading;
