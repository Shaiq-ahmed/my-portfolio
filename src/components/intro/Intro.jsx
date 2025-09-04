import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./intro.css";
import { GrLocation } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import profile from "../../assests/Subject.png";
import { PiHandWavingDuotone } from "react-icons/pi";
import { FaCode, FaDatabase, FaServer } from "react-icons/fa";
import SimpleBackground from "../three/SimpleBackground";

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [showProfileModal, setShowProfileModal] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const imageSlideIn = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const techHighlights = [
    { icon: FaCode, text: "Frontend Development", color: "#0a83ed" },
    { icon: FaServer, text: "Backend APIs", color: "#fd4949" },
    { icon: FaDatabase, text: "Database Design", color: "#0a83ed" }
  ];

  return (
    <div className="intro-container">
      <div className="intro-3d-background">
        <SimpleBackground />
      </div>
      
      <motion.div
        className="intro-portion"
        ref={ref}
        initial="hidden"
        animate={mainControls}
        variants={fadeIn}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className="intro-left"
          variants={slideIn}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <motion.div 
            className="intro-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
          >
            Full Stack Developer
          </motion.div>
          
          <h1 className="intro-name">
            Hi, I'm <span className="name-highlight">Shaiq Ahmed</span>
            <motion.div
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
              className="inline-element"
            >
              <PiHandWavingDuotone className="intro-wave" />
            </motion.div>
          </h1>
          
          <motion.p
            className="intro-para"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Full Stack Developer with <span className="highlight">2+ years of experience</span> passionate about creating <span className="highlight">innovative web applications </span>
            using modern technologies. Specialized in <span className="highlight">React, Node.js, Express, and MongoDB </span>
            with expertise in both frontend and backend development.
          </motion.p>

          <motion.div 
            className="tech-highlights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {techHighlights.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-highlight-item"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <tech.icon className="tech-icon" />
                <span>{tech.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="intro-details-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="intro-mini-details">
              <GrLocation className="detail-icon" /> 
              <span>Karachi, Pakistan</span>
            </div>
            <div className="intro-mini-details-2">
              <RxDotFilled className="status-dot" />
              <span>Available for new opportunities</span>
            </div>
          </motion.div>

          <motion.div 
            className="intro-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <div className="social-links">
              <motion.a 
                href="https://github.com/Shaiq-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="social-icon" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/shaiq-ahmed-bab208240"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="social-icon" />
              </motion.a>
            </div>
            
            <motion.a
              href="/Shaiq's-Resume.pdf"
              download
              className="download-cv-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="intro-right"
          variants={imageSlideIn}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          <div className="intro-image-container">
            <div
              className="profile-frame"
              role="button"
              tabIndex={0}
              onClick={() => setShowProfileModal(true)}
              onKeyDown={(e) => (e.key === 'Enter' ? setShowProfileModal(true) : null)}
            >
              <img src={profile} alt="Shaiq Ahmed portrait" className="profile-photo" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {showProfileModal && (
        <div className="profile-modal-backdrop" onClick={() => setShowProfileModal(false)}>
          <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
            <button className="profile-modal-close" onClick={() => setShowProfileModal(false)} aria-label="Close photo">×</button>
            <img src={profile} alt="Shaiq Ahmed portrait large" className="profile-modal-photo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
