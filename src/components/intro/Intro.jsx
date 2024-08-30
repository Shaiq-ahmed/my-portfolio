import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./intro.css";
import { GrLocation } from "react-icons/gr";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import profile from "../../assests/IMG_2547.JPG";
import { PiHandWavingDuotone } from "react-icons/pi";

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

  return (
    <div className="intro-container">
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
          <h1 className="intro-name">
            Hi, I'm Shaiq Ahmed
            <PiHandWavingDuotone className="intro-wave" />
          </h1>
          <p className="intro-para">
            I am a passionate software engineer with over 2 years of experience
            specializing in backend development. Recently, I have expanded my
            skill set to include full-stack development using the MERN stack. I
            am dedicated to creating efficient, scalable, and user-friendly web
            applications.
          </p>
          <div className="intro-mini-details">
            <p>
              <GrLocation className="bold-icon" /> Karachi, Pakistan
            </p>
          </div>
          <div className="intro-mini-details-2">
            <p>
              <RxDotFilled className="bold-icon" style={{ color: "#0ab80a" }} />{" "}
              Available for new projects
            </p>
          </div>
          <div className="icons-intro">
            <a href="https://github.com/Shaiq-ahmed">
              <FaGithub className="react-icon-small" />
            </a>
            <a href="https://www.linkedin.com/in/shaiq-ahmed-bab208240">
              <FaLinkedin className="react-icon-small" />
            </a>

            {/* <FaInstagram className="react-icon-small" /> */}
          </div>
        </motion.div>
        <motion.div
          className="intro-right"
          variants={imageSlideIn}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          {/* <div className=''> */}
          {/* <svg className='intro-image-container' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4B5563" d="M41.7,-14.9C48.8,8.3,45.7,33.5,31.8,43.6C17.9,53.6,-6.9,48.6,-29.3,33.9C-51.6,19.1,-71.6,-5.3,-66.3,-26.1C-61.1,-46.8,-30.5,-63.9,-6.6,-61.7C17.3,-59.6,34.5,-38.2,41.7,-14.9Z" transform="translate(100 100)" />
                            <image className='intro-image' xlinkHref={profile} />
                        </svg> */}
          {/* <svg
            className="intro-image-container"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "#d3d5d6" }} // Change this to match your desired background color
          >
            <defs>
              <clipPath id="clip-path">
                <path
                  d="M44.7,-64C57.2,-52.3,66.3,-38.4,69.9,-23.6C73.5,-8.8,71.6,6.9,65.4,19.8C59.2,32.7,48.8,42.7,37.2,47.8C25.5,52.9,12.8,53,1.4,51.1C-10,49.1,-19.9,45.1,-34,40.8C-48,36.6,-66.2,32,-75.6,20.5C-85,8.9,-85.6,-9.6,-79,-24.3C-72.3,-39.1,-58.4,-50.1,-44,-61.2C-29.6,-72.2,-14.8,-83.4,0.6,-84.2C16,-85.1,32.1,-75.7,44.7,-64Z"
                  transform="translate(100 100)"
                />
              </clipPath>
            </defs>

          </svg> */}
          <svg
            id="sw-js-blob-svg"
            className="intro-image-container"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop
                  id="stop1"
                  stop-color="rgba(236.91, 141.993, 12.112, 1)"
                  offset="0%"
                ></stop>
                <stop
                  id="stop2"
                  stop-color="rgba(239.187, 152.543, 9.527, 1)"
                  offset="100%"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient)"
              d="M27.5,-33.8C33.6,-27.6,35.3,-17,35.5,-7.5C35.6,2.1,34.4,10.6,30.6,18C26.7,25.4,20.2,31.6,12.8,33.7C5.4,35.7,-3,33.6,-11.3,30.7C-19.5,27.8,-27.6,24.2,-33.1,17.7C-38.5,11.2,-41.3,1.7,-39.4,-6.5C-37.5,-14.8,-30.8,-21.8,-23.5,-27.8C-16.1,-33.8,-8.1,-38.8,1.3,-40.3C10.7,-41.9,21.3,-40,27.5,-33.8Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              stroke-width="0"
              style="transition: all 0.3s ease 0s;"
              stroke="url(#sw-gradient)"
            ></path>

            <image
              className="intro-image"
              xlinkHref={profile}
              x="0"
              y="15"
              width="200"
              height="200"
              clipPath="url(#clip-path)"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
