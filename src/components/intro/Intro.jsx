import React, { useEffect, useRef } from "react";
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
              style={{ display: "inline-block" }}
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
                <tech.icon className="tech-icon" style={{ color: tech.color }} />
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
            <motion.div
              className="image-glow"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <svg
              className="intro-image"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ff88" />
                  <stop offset="50%" stopColor="#ff6b00" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <clipPath id="clip-path">
                  <path
                    d="M44.7,-64C57.2,-52.3,66.3,-38.4,69.9,-23.6C73.5,-8.8,71.6,6.9,65.4,19.8C59.2,32.7,48.8,42.7,37.2,47.8C25.5,52.9,12.8,53,1.4,51.1C-10,49.1,-19.9,45.1,-34,40.8C-48,36.6,-66.2,32,-75.6,20.5C-85,8.9,-85.6,-9.6,-79,-24.3C-72.3,-39.1,-58.4,-50.1,-44,-61.2C-29.6,-72.2,-14.8,-83.4,0.6,-84.2C16,-85.1,32.1,-75.7,44.7,-64Z"
                    transform="translate(100 100)"
                  />
                </clipPath>
              </defs>

              <motion.path
                d="M44.7,-64C57.2,-52.3,66.3,-38.4,69.9,-23.6C73.5,-8.8,71.6,6.9,65.4,19.8C59.2,32.7,48.8,42.7,37.2,47.8C25.5,52.9,12.8,53,1.4,51.1C-10,49.1,-19.9,45.1,-34,40.8C-48,36.6,-66.2,32,-75.6,20.5C-85,8.9,-85.6,-9.6,-79,-24.3C-72.3,-39.1,-58.4,-50.1,-44,-61.2C-29.6,-72.2,-14.8,-83.4,0.6,-84.2C16,-85.1,32.1,-75.7,44.7,-64Z"
                transform="translate(100 100)"
                fill="url(#blobGradient)"
                animate={{
                  d: [
                    "M44.7,-64C57.2,-52.3,66.3,-38.4,69.9,-23.6C73.5,-8.8,71.6,6.9,65.4,19.8C59.2,32.7,48.8,42.7,37.2,47.8C25.5,52.9,12.8,53,1.4,51.1C-10,49.1,-19.9,45.1,-34,40.8C-48,36.6,-66.2,32,-75.6,20.5C-85,8.9,-85.6,-9.6,-79,-24.3C-72.3,-39.1,-58.4,-50.1,-44,-61.2C-29.6,-72.2,-14.8,-83.4,0.6,-84.2C16,-85.1,32.1,-75.7,44.7,-64Z",
                    "M39.1,-67.8C48.6,-60.2,53.2,-42.6,62.3,-24.5C71.4,-6.4,85,12.2,84.1,29.7C83.2,47.1,67.8,63.4,49.2,71.1C30.6,78.8,8.8,77.9,-10.6,72.8C-30,67.7,-47,58.4,-59.4,44.4C-71.8,30.4,-79.6,11.7,-80.7,-8.3C-81.8,-28.3,-76.2,-49.6,-64.1,-58.4C-52,-67.2,-33.4,-63.5,-16.2,-61.9C1,-60.3,19.6,-75.4,39.1,-67.8Z",
                    "M44.7,-64C57.2,-52.3,66.3,-38.4,69.9,-23.6C73.5,-8.8,71.6,6.9,65.4,19.8C59.2,32.7,48.8,42.7,37.2,47.8C25.5,52.9,12.8,53,1.4,51.1C-10,49.1,-19.9,45.1,-34,40.8C-48,36.6,-66.2,32,-75.6,20.5C-85,8.9,-85.6,-9.6,-79,-24.3C-72.3,-39.1,-58.4,-50.1,-44,-61.2C-29.6,-72.2,-14.8,-83.4,0.6,-84.2C16,-85.1,32.1,-75.7,44.7,-64Z"
                  ]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <image
                xlinkHref={profile}
                x="0"
                y="20"
                width="200"
                height="200"
                clipPath="url(#clip-path)"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
