import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"; // Import necessary hooks
import "./project.css";
import image from "../../assests/Invoice-generator-tracker.png";
import chat from "../../assests/chat.gif";
import admin from "../../assests/admiin.jpg";
import { LuExternalLink } from "react-icons/lu";

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
      title: "Invoice Generator",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere sint maiores quas, adipisci officia ut quidem velit voluptatibus. Esse quod quam provident rem laborum, commodi rerum minus ad quidem!",
      image: image,
      tools: [
        "MongoDB",
        "Express",
        "NodeJS",
        "JavaScript",
        "React",
        "Redux",
        "Docker",
        "NGINX",
        "Git",
      ],
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere sint maiores quas, adipisci officia ut quidem velit voluptatibus. Esse quod quam provident rem laborum, commodi rerum minus ad quidem!",
      image: admin,
      tools: [
        "MongoDB",
        "Express",
        "NodeJS",
        "JavaScript",
        "React",
        "Redux",
        "Docker",
        "NGINX",
        "Git",
      ],
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere sint maiores quas, adipisci officia ut quidem velit voluptatibus. Esse quod quam provident rem laborum, commodi rerum minus ad quidem!",
      image: chat,
      tools: [
        "MongoDB",
        "Express",
        "NodeJS",
        "JavaScript",
        "React",
        "Redux",
        "Docker",
        "NGINX",
        "Git",
      ],
    },
  ];

  return (
    <div className="container-project" id="projects" ref={ref}>
      <motion.div
        className="work"
        initial="hidden"
        animate={mainControls}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="touch-button">
          <p>Work</p>
        </div>
        <p className="work-main-text">
          Some of the noteworthy projects I have built:
        </p>
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial="hidden"
            animate={mainControls}
            variants={cardVariants}
            transition={{ duration: 1, delay: index * 0.2 }} // Staggered animation
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          >
            <div className="left">
              <img
                src={project.image}
                alt={project.title}
                style={{ height: "100%", width: "auto", objectFit: "cover" }} // Use cover to maintain aspect ratio
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
