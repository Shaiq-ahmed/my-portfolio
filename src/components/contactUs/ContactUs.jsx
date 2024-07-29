import React, { useEffect, useRef } from 'react';
import { motion , useInView, useAnimation } from 'framer-motion';
import "./contactUs.css";
import { BsTelephone } from "react-icons/bs";
import { RxCopy } from "react-icons/rx";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  // Define the animation variants
  const ref = useRef(null)
  const isInView = useInView(ref,{once: true})
  const mainControls = useAnimation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div className='container' ref={ref} id='contact'>
      <motion.div
        className='contact-us'
        initial="hidden"
        animate={mainControls}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      
      >
        <motion.div
          className='touch-button'
          variants={slideIn}
          transition={{ duration: 0.6, delay: 0.2 }}
         
        >
          <p>Get in touch</p>
        </motion.div>

        <motion.p
          className='contact-main-text'
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          
        >
          What's next? Feel free to reach out to me if you are looking for a developer, have a query, or
          simply want to connect.
        </motion.p>

        <motion.div
          className='email'
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
         
        >
          <FiMail className='react-icon' />
          <h3>shaiqahmed54@gmail.com</h3>
          <RxCopy className='react-icon' />
        </motion.div>

        <motion.div
          className='email'
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
         
        >
          <BsTelephone className='react-icon' />
          <h3>+923143611225</h3>
          <RxCopy className='react-icon' />
        </motion.div>

        <motion.p
          className='end-text'
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 1 }}
          
        >
          You can also find me on these platforms!
        </motion.p>

        <motion.div
          className='icons'
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 1.2 }}
          
        >
                      <a href="https://github.com/Shaiq-ahmed"><FaGithub className="react-icon-small" /></a>
            <a href="https://www.linkedin.com/in/shaiq-ahmed-bab208240"><FaLinkedin className="react-icon-small" /></a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactUs;