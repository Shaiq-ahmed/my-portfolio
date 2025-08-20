import React, { useEffect, useRef } from "react";
import "./experience.css";
import branexLogo from "../../assests/Branex-Logo-1.png..webp";
import digitalAuxiliusLogo from "../../assests/digital-auxilius-logo.png"; // You'll need to add this
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
      logo: digitalAuxiliusLogo,
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
      ]
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
      ]
    }
  ];

  return (
    <div className="container-experience" ref={ref} id="work">
      <div className="experience">
        <div className="touch-button">
          <p>Professional Experience</p>
        </div>
        <p className="experience-main-text">
          My professional journey as a Backend Developer, building scalable and robust systems:
        </p>
        
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="container-work-experience element"
            variants={containerVariants}
            initial="hidden"
            animate={mainControls}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="details-header">
              <img 
                className={exp.id === "digital-auxilius" ? "company-logo" : "company-logo"} 
                src={exp.logo} 
                alt={exp.company.toLowerCase()} 
              />
              <div className="position-details">
                <h3 className="position">{exp.position}</h3>
                <h4 className="company-name">{exp.company}</h4>
                <p className="date">{exp.date}</p>
              </div>
            </div>
            <div className="task-details">
              <ul>
                {exp.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
