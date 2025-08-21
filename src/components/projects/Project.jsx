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
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial="hidden"
            animate={mainControls}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeInOut" }} // Staggered animation with easing
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="left">
              <img
                src={project.image}
                alt={project.title}
                className="left-image"
              />
            </div>
            <div className="right">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="tools">
                {project.tools.map((tool, toolIndex) => (
                  <p key={toolIndex}>{tool}</p>
                ))}
              </div>
              <LuExternalLink className="link" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
