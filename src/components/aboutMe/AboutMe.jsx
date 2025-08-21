import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./aboutme.css";
import image from "../../assests/img3.png";
import { FaCode, FaRocket, FaUsers, FaBrain, FaUser } from "react-icons/fa";
import TouchButton from '../shared/TouchButton';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInDelay = (delay) => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay, duration: 0.6 } },
  });

  const principles = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable and readable code following best practices"
    },
    {
      icon: FaRocket,
      title: "Modern Tech",
      description: "Using latest technologies to build efficient applications"
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description: "Working effectively with teams to deliver quality solutions"
    },
    {
      icon: FaBrain,
      title: "Problem Solving",
      description: "Finding creative solutions to complex development challenges"
    }
  ];

  return (
    <div className="container-about" id="about" ref={ref}>
      <motion.div
        className="about"
        initial="hidden"
        animate={mainControls}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -30 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <TouchButton icon={FaUser} variant="primary" size="medium">
            About Me
          </TouchButton>
          <h2 className="about-title">Passionate Full Stack Developer</h2>
        </motion.div>

        <motion.div
          className="detail-container"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div className="left-sec" variants={fadeInDelay(0.6)}>
            <div className="about-content">
              <motion.div
                className="main-description"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="intro-paragraph">
                  I'm a <span className="highlight">Full Stack Developer</span> with expertise
                  specializing in <span className="highlight">MERN stack development</span>.
                  I love creating complete web solutions that combine beautiful user interfaces
                  with robust backend systems.
                </p>
                
                <p className="description-paragraph">
                  I graduated with a <strong>Bachelor of Engineering in Computer Systems</strong> from 
                  <strong> NED University</strong> in 2022. Since then, I've been dedicated to mastering 
                  both frontend and backend technologies, working with React for dynamic user interfaces 
                  and Node.js/Express for scalable server-side applications.
                </p>

                <p className="description-paragraph">
                  Currently, I'm focused on building modern web applications using MongoDB for data storage, 
                  implementing RESTful APIs, and deploying applications on cloud platforms like AWS. 
                  I enjoy the entire development process from designing user experiences to optimizing 
                  database performance.
                </p>
              </motion.div>

              <motion.div
                className="principles-grid"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    className="principle-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <principle.icon className="principle-icon" />
                    <h4 className="principle-title">{principle.title}</h4>
                    <p className="principle-description">{principle.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="right-sec" variants={fadeInDelay(0.8)}>
            <div className="image-container">
              <motion.div
                className="image-glow"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img className="about-image" src={image} alt="Shaiq Ahmed - Full Stack Developer" />
            </div>
            
            <motion.div
              className="achievements"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="achievement-item">
                <span className="achievement-number">7+</span>
                <span className="achievement-label">Projects Built</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">50+</span>
                <span className="achievement-label">Commits</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">JS</span>
                <span className="achievement-label">Expert</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
