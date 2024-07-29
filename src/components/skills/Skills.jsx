import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import "./skills.css";
import { s_list } from './s_list.js';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeInDelay = (delay) => ({
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay, duration: 0.6 } },
    });

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div className='container-skills' ref={ref} id='skills'>
            <motion.div
                className='skills'
                initial="hidden"
                animate={mainControls}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className='touch-button'
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{ scale: 1.1 }} // Hover effect
                >
                    <p>Skills</p>
                </motion.div>

                <motion.p
                    className='skills-main-text'
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    The skills, tools and technologies I am really good at:
                </motion.p>

                <motion.div
                    className='skill-list'
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"} // Trigger animation based on isInView
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {s_list.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-item"
                            initial={{ opacity: 0, y: 20 }} // Initial state for skill items
                            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }} // Staggered animation
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Hover effect for skill items
                        >
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <p className='skill-name'>{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Skills;