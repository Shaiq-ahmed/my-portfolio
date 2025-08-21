import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"; // Import necessary hooks
import "./project.css";
import image from "../../assests/Invoice-generator-tracker.png";
import chat from "../../assests/chat.gif";
import admin from "../../assests/admiin.jpg";
import { LuExternalLink } from "react-icons/lu";
import SectionHeading from "../shared/SectionHeading";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      subtitle: "Full-Stack Shopping Solution",
      description: "A comprehensive e-commerce platform with real-time inventory management, secure payment processing, and intuitive admin dashboard. Features include product catalog, shopping cart, user authentication, and order tracking.",
      image: image,
      category: "Web Application",
      status: "Live",
      duration: "3 months",
      teamSize: "4 developers",
      myRole: "Full-Stack Developer",
      features: [
        "Real-time inventory management",
        "Secure payment integration",
        "Admin dashboard with analytics",
        "Mobile-responsive design",
        "Order tracking system"
      ],
      challenges: [
        "Implemented real-time stock updates across multiple users",
        "Optimized database queries for fast product searches",
        "Integrated multiple payment gateways"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Socket.io", "Stripe API"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      subtitle: "Team Collaboration Platform",
      description: "A modern task management application designed for team collaboration with real-time updates, drag-and-drop functionality, and comprehensive project tracking. Includes time tracking, file sharing, and team communication features.",
      image: admin,
      category: "Mobile & Web App",
      status: "Live",
      duration: "4 months",
      teamSize: "3 developers",
      myRole: "Lead Developer",
      features: [
        "Drag-and-drop task boards",
        "Real-time team collaboration",
        "Time tracking and reporting",
        "File attachment system",
        "Push notifications"
      ],
      challenges: [
        "Implemented complex drag-and-drop functionality",
        "Built real-time collaboration features",
        "Optimized performance for large datasets"
      ],
      technologies: ["React Native", "React", "Node.js", "PostgreSQL", "Socket.io", "AWS S3"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      subtitle: "Enterprise Communication Hub",
      description: "A scalable real-time messaging platform built for enterprise use with end-to-end encryption, file sharing, video calls, and advanced moderation tools. Supports thousands of concurrent users with high performance.",
      image: chat,
      category: "Web Application",
      status: "Live",
      duration: "2 months",
      teamSize: "2 developers",
      myRole: "Full-Stack Developer",
      features: [
        "End-to-end encryption",
        "Video and voice calls",
        "File sharing capabilities",
        "Message search and history",
        "Multi-room support"
      ],
      challenges: [
        "Implemented secure end-to-end encryption",
        "Optimized for thousands of concurrent users",
        "Built scalable WebSocket architecture"
      ],
      technologies: ["React", "Node.js", "Socket.io", "Redis", "MongoDB", "WebRTC"],
      github: "#",
      demo: "#"
    },
  ];

  return (
    <div className="container-project" id="projects" ref={ref}>
      <motion.div
        className="work"
        initial="hidden"
        animate={mainControls}
        variants={fadeIn}
        transition={{ duration: 0.8, ease: "easeInOut" }} // Slower fade-in with easing
      >
        <SectionHeading
          title="Featured Work"
          subtitle="Recent Projects"
          description="Showcasing innovative web applications and mobile solutions I've built"
          variant="primary"
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={project.id}
              initial="hidden"
              animate={mainControls}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeInOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <span className="project-category">{project.category}</span>
                    <div className="project-status">
                      <span className={`status-badge ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <div className="project-titles">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <div className="project-meta">
                    <span className="duration">{project.duration}</span>
                    <span className="team-size">{project.teamSize}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-role">
                  <strong>Role:</strong> {project.myRole}
                </div>

                <div className="project-features">
                  <h5 className="features-title">Key Features</h5>
                  <ul className="features-list">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <span className="feature-bullet">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-challenges">
                  <h5 className="challenges-title">Technical Challenges</h5>
                  <ul className="challenges-list">
                    {project.challenges.slice(0, 2).map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="challenge-item">
                        <span className="challenge-bullet">⚡</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h5 className="tech-title">Technologies Used</h5>
                  <div className="tech-stack">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <a href={project.demo} className="action-btn demo-btn">
                    <LuExternalLink />
                    Live Demo
                  </a>
                  <a href={project.github} className="action-btn github-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
