import React from 'react';
import { motion } from 'framer-motion';
import './TouchButton.css';

const TouchButton = ({ 
  children, 
  icon: Icon, 
  className = '', 
  variant = 'primary',
  size = 'medium',
  ...props 
}) => {
  const buttonVariants = {
    hover: {
      y: -3,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      y: 0,
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`touch-button ${variant} ${size} ${className}`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      <div className="button-content">
        {Icon && <Icon className="button-icon" />}
        <span className="button-text">{children}</span>
      </div>
      <div className="button-glow"></div>
      <div className="button-shine"></div>
    </motion.div>
  );
};

export default TouchButton;
