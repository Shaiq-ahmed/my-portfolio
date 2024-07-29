import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./aboutme.css";
import image from "../../assests/pixelcut-export.png";

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
          className="touch-button"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.1 }} // Hover effect
        >
          <p>About Me</p>
        </motion.div>
        <motion.div
          className="detail-container"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div className="right-sec" variants={fadeInDelay(0.6)}>
            <img className="image" src={image} alt="About Me" />
          </motion.div>
          <motion.div className="left-sec" variants={fadeInDelay(0.8)}>
            <h3>Curious About me? Here you have it:</h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 4 * 0.2 }} // Staggered animation
            >
              <p>
                I completed a Bachelor of Engineering in <b>Computer Systems</b> from
                <b> NED University </b>in 2022. Since then, I have been building and
                enhancing my skills in web development, focusing primarily on
                backend technologies. My journey into full-stack development
                began with learning the MERN stack, and I have been passionate
                about creating comprehensive web solutions ever since.
              </p>
              <p>
                Throughout my career, I have worked on various projects that
                have honed my skills in both backend and frontend development. I
                am always eager to learn new technologies and take on
                challenging projects that push the boundaries of my abilities.
              </p>
              <p>
                In addition to my technical skills, I am a strong advocate for
                clean, maintainable code and collaborative teamwork. I believe
                that continuous learning and adaptation are key to success in
                the ever-evolving field of web development.
              </p>
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
