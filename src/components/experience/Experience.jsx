import React, { useEffect, useRef } from 'react'
import "./experience.css"
import nanosoftLogo from "../../assests/nanosoft-logo.png"
import appickLogo from "../../assests/logo.png"
import { motion, useInView, useAnimation } from 'framer-motion';


const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation();


  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 50, damping: 20 }
    }
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div className='container-experience' ref={ref} id='work'>
      <div className='experience'>
        <div className='touch-button'>
          <p>Experience</p>
        </div>
        <p className='experience-main-text'>Here is my quick summary of my most recent experiences: </p>
        {/* <div className='container-work-experience'> */}
        <motion.div
          key={""}
          className='container-work-experience'
          variants={containerVariants}
          initial='hidden'
          animate={mainControls}
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        >

          <div className='details-header'>
            <img className='company-logo' src={nanosoftLogo} alt='NanoSoft' />
            <p className='position'>Associate Software Engineer</p>
            <p className='date'>Oct 2022 - Present </p>
          </div>
          <div className='task-details'>
            <ul>
              <li>Design and implement robust, scalable RESTful APIs using
                Node.js, Express, and MongoDB, ensuring seamless
                integration with front-end applications and third-party
                services.</li>
              <li>Efficiently manage MongoDB databases, including schema
                design, indexing, and query optimization to ensure high
                performance and scalability.</li>
              <li>Actively participate in code reviews, providing constructive
                feedback to peers and ensuring adherence to best practices
                and coding standards.</li>
              <li>Write thorough unit and integration tests using Jest and
                Supertest to ensure APIs are reliable and perform well,
                achieving high test coverage.</li>
              <li>Create detailed API documentation using tools like Swagger.</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          key={""}
          className='container-work-experience'
          variants={containerVariants}
          initial='hidden'
          animate={mainControls}
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
        >
          <div className='details-header'>
            <img className='company-logo' src={appickLogo} alt='appick' />
            <p className='position'>Web Developer - Intern</p>
            <p className='date'>March 2021 - May 2021 </p>
          </div>
          <div className='task-details'>
            <ul>
              <li>Build Frontend of their websites using HTML, CSS and
                Bootstrap.</li>
              <li>Help develop and follow best practices and development
                standards.</li>
              <li>Performs other related duties as assigned.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience