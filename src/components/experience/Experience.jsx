import React, { useEffect, useRef } from "react";
import "./experience.css";
import nanosoftLogo from "../../assests/nanosoft-logo.png";
import digitalAuxiliusLogo from "../../assests/Digital-auxilius.jpeg";
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
      logo: digitalAuxiliusLogo, // Will use fallback
      company: "Digital Auxilius",
      position: "Backend Developer",
      date: "May 2025 - Present",
      duration: "3+ months",
      type: "Full-time",
      location: "OnSite, Karachi, Pakistan",
      highlights: [
        "Developing scalable backend systems",
        "Implementing RESTful APIs",
        "Optimizing database queries",
        "Collaborating with frontend teams",
      ],
      achievements: [
        "Improved application performance by 40%",
        "Successfully integrated 6+ third-party APIs"
      ],
      technologies: ["Node.js", "Nest.js", "Express","PostgreSQL",  "MongoDB", "JavaScript", "TypeScript", "Redis", "Docker", "Git"]
    },
    {
      id: "Nanosoft Technologies",
      logo: nanosoftLogo,
      company: "Nanosoft Technologies",
      position: "Associate Software Engineer",
      date: "Oct 2022 - Apr 2025",
      duration: "2.5 years",
      type: "Full-time",
      location: "Karachi, Pakistan",
      highlights: [
        "Full-stack JavaScript application development",
        "Real-time feature implementation",
        "Database optimization and design",
        "API development and integration",
        "Writing unit and integration tests",
        "Collaboration with cross-functional teams",
      ],
      achievements: [
        "Developed 5+ complete web applications",
        "Reduced API response time by 60%",
        "Implemented comprehensive testing coverage"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Socket.io", "Jest"]
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
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="timeline-connector">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div className="company-info">
                    <div className="company-logo-container">
                      {exp.logo ? (
                        <img
                          className="company-logo"
                          src={exp.logo}
                          alt={exp.company.toLowerCase()}
                        />
                      ) : (
                        <IconFallback name={exp.company} size={60} className="company-logo-fallback" />
                      )}
                    </div>
                    <div className="position-info">
                      <h3 className="position-title">{exp.position}</h3>
                      <h4 className="company-name">{exp.company}</h4>
                      <div className="job-meta">
                        <span className="duration">{exp.duration}</span>
                        <span className="separator">•</span>
                        <span className="job-type">{exp.type}</span>
                        <span className="separator">•</span>
                        <span className="location">{exp.location}</span>
                      </div>
                      <div className="date-range">{exp.date}</div>
                    </div>
                  </div>

                  {exp.id === 'digital-auxilius' && (
                    <div className="current-badge">
                      <span>Current</span>
                    </div>
                  )}
                </div>

                <div className="experience-highlights">
                  <h5 className="highlights-title">Key Responsibilities</h5>
                  <div className="highlights-grid">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <motion.div
                        key={highlightIndex}
                        className="highlight-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * highlightIndex }}
                      >
                        <div className="highlight-icon">⚡</div>
                        <span>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="experience-achievements">
                  <h5 className="achievements-title">Key Achievements</h5>
                  <div className="achievements-list">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        className="achievement-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * achievementIndex }}
                      >
                        <div className="achievement-bullet">🏆</div>
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="technologies-section">
                  <h5 className="tech-section-title">Technologies</h5>
                  <div className="tech-tags-container">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * techIndex }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
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
                <span className="stat-number">Full</span>
                <span className="stat-label">Stack Expert</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
