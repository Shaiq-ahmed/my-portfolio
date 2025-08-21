import React, { useEffect, useRef } from "react";
import "./experience.css";
import branexLogo from "../../assests/Branex-Logo-1.png..webp";
import IconFallback from "../skills/IconFallback";
import { motion, useInView, useAnimation } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const experiences = [
    {
      id: "digital-auxilius",
      logo: null, // Will use fallback
      company: "Digital Auxilius",
      position: "Full Stack Developer",
      date: "May 2025 - Present",
      tasks: [
        "Develop and maintain full-stack web applications using React, Node.js, Express, and MongoDB for various client projects.",
        "Build responsive user interfaces with React and modern CSS frameworks, ensuring cross-browser compatibility and mobile responsiveness.",
        "Design and implement RESTful APIs using Node.js and Express, handling authentication, data validation, and error management.",
        "Work with MongoDB databases to design schemas, optimize queries, and implement data relationships for efficient data storage.",
        "Integrate third-party APIs and services, including payment gateways, email services, and cloud storage solutions.",
        "Collaborate with design teams to translate UI/UX designs into functional, interactive web applications.",
        "Deploy applications using AWS services including EC2 and S3, ensuring scalable and secure cloud infrastructure."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML/CSS", "AWS", "Git"]
    },
    {
      id: "branex",
      logo: branexLogo,
      company: "Branex",
      position: "Full Stack Developer",
      date: "Oct 2022 - Apr 2025",
      tasks: [
        "Developed 7+ full-stack web applications using the MERN stack, delivering complete solutions from frontend UI to backend APIs.",
        "Built dynamic and responsive user interfaces using React, implementing state management with Redux for complex applications.",
        "Created robust backend APIs with Node.js and Express, handling user authentication, data processing, and business logic implementation.",
        "Designed and optimized MongoDB database schemas, improving application performance and data retrieval efficiency.",
        "Implemented real-time features using Socket.io for live chat systems and real-time notifications in web applications.",
        "Wrote comprehensive tests using Jest to ensure code quality and application reliability across all project components.",
        "Collaborated with cross-functional teams using Git version control, participating in code reviews and agile development processes."
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Socket.io", "Jest", "Git"]
    }
  ];

  return (
    <div className="container-experience" ref={ref} id="work">
      <div className="experience">
        <SectionHeading
          title="Professional Experience"
          subtitle="My Journey"
          description="Building complete web applications with modern technologies and innovative solutions"
          variant="secondary"
        />
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-card ${exp.id === 'digital-auxilius' ? 'current-position' : ''}`}
              variants={containerVariants}
              initial="hidden"
              animate={mainControls}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="experience-content">
                <div className="details-header">
                  <div className="company-logo-container">
                    {exp.logo ? (
                      <img 
                        className="company-logo" 
                        src={exp.logo} 
                        alt={exp.company.toLowerCase()} 
                      />
                    ) : (
                      <IconFallback name={exp.company} size={80} className="company-logo-fallback" />
                    )}
                  </div>
                  <div className="position-details">
                    <h3 className="position">{exp.position}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                    <p className="date">{exp.date}</p>
                  </div>
                  {exp.id === 'digital-auxilius' && (
                    <div className="current-badge">
                      Current Role
                    </div>
                  )}
                </div>
                
                <div className="task-details">
                  <ul>
                    {exp.tasks.map((task, taskIndex) => (
                      <motion.li 
                        key={taskIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * taskIndex }}
                      >
                        {task}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="technologies-used">
                  <h5 className="tech-title">Technologies Used:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="experience-decorator">
                <div className="decorator-line"></div>
                <div className="decorator-dot"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
          }}
        >
          <div className="summary-content">
            <h3 className="summary-title">Full Stack Expertise</h3>
            <p className="summary-description">
              Passionate about creating end-to-end web solutions that combine intuitive user experiences 
              with robust backend architecture, delivering high-quality applications that meet business objectives.
            </p>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">MERN</span>
                <span className="stat-label">Stack Specialist</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
