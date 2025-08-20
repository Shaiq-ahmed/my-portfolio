import React, { useEffect, useRef } from "react";
import "./experience.css";
import branexLogo from "../../assests/Branex-Logo-1.png..webp";
import IconFallback from "../skills/IconFallback";
import { motion, useInView, useAnimation } from "framer-motion";

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
  }, [isInView]);

  const experiences = [
    {
      id: "digital-auxilius",
      logo: null, // Will use fallback
      company: "Digital Auxilius",
      position: "Backend Developer",
      date: "May 2025 - Present",
      tasks: [
        "Architect and develop scalable backend systems using NestJS, PostgreSQL, and Redis for high-performance applications serving 100K+ users.",
        "Implement microservices architecture with Docker containerization, reducing deployment time by 60% and improving system reliability.",
        "Design and optimize database schemas and queries in PostgreSQL, achieving 40% improvement in query performance through advanced indexing strategies.",
        "Build real-time features using WebSockets and Redis pub/sub, enabling instant notifications and live data synchronization across distributed systems.",
        "Lead API design and documentation using OpenAPI/Swagger, establishing consistent development standards across multiple development teams.",
        "Implement comprehensive testing strategies including unit, integration, and e2e tests with 95% code coverage using Jest and Supertest."
      ],
      technologies: ["NestJS", "PostgreSQL", "Redis", "Docker", "TypeScript", "WebSockets", "Microservices"]
    },
    {
      id: "branex",
      logo: branexLogo,
      company: "Branex",
      position: "Associate Software Engineer",
      date: "Oct 2022 - Apr 2025",
      tasks: [
        "Developed and maintained 15+ production RESTful APIs using Node.js, Express, and MongoDB, serving over 50,000 daily active users with 99.9% uptime.",
        "Optimized MongoDB database operations and implemented advanced aggregation pipelines, reducing average response time by 35% and improving overall system performance.",
        "Collaborated with cross-functional teams in Agile environment, participating in daily standups, sprint planning, and retrospectives while mentoring 3 junior developers.",
        "Established comprehensive testing framework with Jest and Supertest, achieving 90% test coverage and reducing production bugs by 70%.",
        "Created detailed API documentation using Swagger/OpenAPI, improving developer onboarding time by 50% and enhancing team collaboration.",
        "Implemented CI/CD pipelines using GitHub Actions, automating deployment processes and reducing manual deployment errors by 80%."
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Jest", "GitHub Actions", "Swagger", "RESTful APIs"]
    }
  ];

  return (
    <div className="container-experience" ref={ref} id="work">
      <div className="experience">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: -30 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <div className="touch-button">
            <p>Professional Experience</p>
          </div>
          <p className="experience-main-text">
            My professional journey as a Backend Developer, building scalable and robust systems for enterprise applications
          </p>
        </motion.div>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`container-work-experience ${exp.id === 'digital-auxilius' ? 'current-position' : ''}`}
            variants={containerVariants}
            initial="hidden"
            animate={mainControls}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
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
              <h5 className="tech-title">Key Technologies:</h5>
              <div className="tech-tags">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        
        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } }
          }}
        >
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">APIs Developed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Daily Users Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%+</span>
              <span className="stat-label">Test Coverage</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
