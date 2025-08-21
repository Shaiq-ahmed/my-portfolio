import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import "./contactUs.css";
import { BsTelephone } from "react-icons/bs";
import { RxCopy } from "react-icons/rx";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TouchButton from '../shared/TouchButton';

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [copiedText, setCopiedText] = useState('');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const contactMethods = [
    {
      icon: FiMail,
      label: "Email",
      value: "shaiqahmed54@gmail.com",
      action: () => window.open('mailto:shaiqahmed54@gmail.com'),
      copyText: "shaiqahmed54@gmail.com"
    },
    {
      icon: BsTelephone,
      label: "Phone",
      value: "+923143611225",
      action: () => window.open('tel:+923143611225'),
      copyText: "+923143611225"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      action: null,
      copyText: "Karachi, Pakistan"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      url: "https://github.com/Shaiq-ahmed",
      color: "#ffffff"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/shaiq-ahmed-bab208240",
      color: "#0077b5"
    }
  ];

  return (
    <div className='contact-container' ref={ref} id='contact'>
      <motion.div
        className='contact-us'
        initial="hidden"
        animate={mainControls}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className='contact-header'
          initial={{ opacity: 0, y: -30 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <TouchButton icon={FiSend} variant="primary" size="medium">
            Get in Touch
          </TouchButton>
          <h2 className="contact-title">Let's Work Together</h2>
          <p className='contact-main-text'>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="contact-method"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="method-icon">
                  <method.icon />
                </div>
                <div className="method-content">
                  <span className="method-label">{method.label}</span>
                  <span className="method-value">{method.value}</span>
                </div>
                <div className="method-actions">
                  {method.action && (
                    <button 
                      className="action-btn primary"
                      onClick={method.action}
                      title={`Contact via ${method.label}`}
                    >
                      <FiSend />
                    </button>
                  )}
                  <button 
                    className="action-btn secondary"
                    onClick={() => copyToClipboard(method.copyText, method.label)}
                    title="Copy to clipboard"
                  >
                    <RxCopy />
                  </button>
                </div>
                {copiedText === method.label && (
                  <motion.div
                    className="copied-notification"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    Copied!
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="social-section"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className='social-text'>
              Find me on these platforms
            </p>
            <div className='social-links'>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--hover-color': social.color }}
                >
                  <social.icon className="social-icon" />
                  <span className="social-label">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="cta-content">
              <h3 className="cta-title">Ready to start a project?</h3>
              <p className="cta-description">
                Let's discuss your ideas and bring them to life with modern web technologies.
              </p>
              <motion.a
                href="mailto:shaiqahmed54@gmail.com"
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSend className="cta-icon" />
                Send Message
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
