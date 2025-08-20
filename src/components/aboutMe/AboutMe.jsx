import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./aboutme.css";
import image from "../../assests/img3.png";
import { FaCode, FaRocket, FaUsers, FaBrain } from "react-icons/fa";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

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
      title: "Clean Architecture",
      description: "Writing maintainable, scalable code with SOLID principles"
    },
    {
      icon: FaRocket,
      title: "Performance First",
      description: "Optimizing systems for speed and reliability"
    },
    {
      icon: FaUsers,
      title: "Team Collaboration",
      description: "Leading and mentoring teams for project success"
    },
    {
      icon: FaBrain,
      title: "Continuous Learning",
      description: "Staying updated with latest technologies and best practices"
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
          <div className="touch-button">
            <p>About Me</p>
          </div>
          <h2 className="about-title">Building the Future, One API at a Time</h2>
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
                  I'm a <span className="highlight">Senior Backend Developer</span> with 3+ years of experience 
                  specializing in building <span className="highlight">scalable enterprise systems</span>. 
                  My expertise lies in designing robust APIs, optimizing database performance, and implementing 
                  microservices architectures that serve millions of users.
                </p>
                
                <p className="description-paragraph">
                  I graduated with a <strong>Bachelor of Engineering in Computer Systems</strong> from 
                  <strong> NED University</strong> in 2022, and since then, I've been dedicated to mastering 
                  backend technologies. My journey has evolved from working with traditional Node.js/Express 
                  stacks to implementing modern solutions with NestJS, PostgreSQL, and distributed systems.
                </p>

                <p className="description-paragraph">
                  Currently at Digital Auxilius, I lead backend development initiatives, mentor junior developers, 
                  and architect solutions that handle high-traffic loads while maintaining 99.9% uptime. 
                  My approach combines technical excellence with business impact, ensuring every solution 
                  drives measurable results.
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
              <img className="about-image" src={image} alt="Shaiq Ahmed - Backend Developer" />
            </div>
            
            <motion.div
              className="achievements"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="achievement-item">
                <span className="achievement-number">15+</span>
                <span className="achievement-label">APIs Built</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">3+</span>
                <span className="achievement-label">Years Experience</span>
              </div>
              <div className="achievement-item">
                <span className="achievement-number">50K+</span>
                <span className="achievement-label">Users Served</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
