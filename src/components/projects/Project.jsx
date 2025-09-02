import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"; // Import necessary hooks
import { LuExternalLink } from "react-icons/lu";
import SectionHeading from "../shared/SectionHeading";
import "./project.css";

const Project = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
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
      title: "GreenKey Health",
      subtitle: "Web & Mobile Application",
      description:
        "GreenKey Health™ is revolutionizing care for the 1 billion people living with sleep-disordered breathing (SDB). We partner with payors, providers, and patients to deliver accessible, value-based solutions that improve sleep, reduce chronic disease risks, and enhance overall well-being. Our goal is to make quality healthcare accessible to everyone and improve the quality of life for 100% of people.",
      image: require("../../assests/Screenshot (4).png"),
      logo: "https://greenkey.health/wp-content/uploads/2024/10/Greenkey-For-Life-2.png.webp",
      category: "Web & Mobile App",
      className: "project-logo",
      status: "Live",
      duration: "Ongoing",
      teamSize: "2 developers",
      myRole: "Backend Developer",
      features: [
        "Seamless Apple Health data synchronization and visual analytics dashboard",
        "Environmental monitoring (sound, brightness) for sleep quality insights",
        "Social login for easy user onboarding",
        "Integration with proprietary Q-State sleep recording hardware",
        "Comprehensive admin panel for user and device management"
      ],
      challenges: [
        "Synchronizing custom hardware data with cloud-based software",
        "Implementing Redis Bull for scalable, reliable notifications",
        "Ensuring robust real-time analytics and data privacy"
      ],
      technologies: [
        "React Native", "React", "Node.js", "NestJS", "Redis", "MongoDB", "SleepScore API", "Firebase", "Docker", "AWS S3"
      ],
      demo: "https://greenkey.health",
      images: [],
      video: ""
    },
    {
      id: 2,
      title: "CupsnChai",
      subtitle: "Web & Mobile Application",
      description:
        "At CupsnChai, we believe in doing things the right way—with real ingredients, bold flavors, and heartfelt service. Every team member is part of our family, and every cup is crafted with care. Our mission is to create meaningful moments and authentic connections through South Asian chai, street food, and hospitality.",
      // image: require("../../assests/cupsnchai.png"), // Use a real image or fallback to logo
      logo: "https://cupsnchai.com/wp-content/uploads/2025/05/Layer_1.png",
      category: "Web & Mobile App",
      className: "project-logo",
      status: "Live (Web), Mobile in Development",
      duration: "Ongoing",
      teamSize: "2 developers",
      myRole: "Full Stack Developer",
      features: [
        "Robust admin panel for business operations",
        "Product, category, and order management",
        "User profile management and secure authentication",
        "Integrated shopping cart and checkout experience"
      ],
      challenges: [
        "Designing scalable admin workflows",
        "Ensuring data consistency across web and mobile platforms",
        "Optimizing for high-traffic promotional events"
      ],
      technologies: [
        "Flutter", "Node.js", "NestJS", "PostgreSQL", "AWS S3", "Docker", "Clover", "React"
      ],
      demo: "https://cupsnchai.com",
      images: [],
      video: require("../../assests/Screen Recording 2025-09-02 at 2.41.40 PM.mov")
    },
    {
      id: 3,
      title: "TeesnMore",
      subtitle: "Web Application",
      description:
        "Established in 2004 in Stoney Creek, Ontario, Tees 'N' More has emerged as one of Canada's leading providers of custom apparel and promotional products. We specialize in designing and printing premium sportswear, workwear, headwear, and distinctive promotional items such as bags, aprons, and bottles. Whether for schools, businesses, or events, we’ve got you covered. From startups to large corporations, we handle orders of all sizes, ensuring each product is crafted to meet your precise specifications.",
      image: require("../../assests/teesnmore.png"), // Add image URL or local asset path later
      logo: "https://teesnmore.ca/assets/images/logo.png",
      category: "Web Application",
      status: "Live",
      duration: "Ongoing",
      teamSize: "4 developers",
      myRole: "Backend Developer",
      features: [
        "Vendor portal for product listing and management",
        "Real-time order tracking and status updates",
        "Stream-based processing for high-volume product uploads",
        "Comprehensive validation for product and order data",
        "Stripe payment integration for seamless transactions"
      ],
      challenges: [
        "Efficiently handling large product catalogs with streaming uploads",
        "Ensuring data integrity and validation at scale",
        "Building a robust vendor management system"
      ],
      technologies: [
        "Node.js", "Javascript", "Express", "MongoDB", "Docker", "React", "Stripe"
      ],
      demo: "https://teesnmore.ca",
      images: [],
      video: ""
    },
    {
      id: 4,
      title: "Rentez",
      subtitle: "Web & Mobile Application",
      description:
        "Rent-EZ is an Emirati company, established in 2023, with a mission to create a sustainable and practical solution for items that often go unused. Our platform enables people to rent out their belongings safely and securely, allowing others to access these items without the need for ownership. By providing an easy-to-use platform, we create value for both listers and renters, making the process of sharing possessions simple and rewarding.",
      image: require("../../assests/rentez.png"), // Add image URL or local asset path later
      logo: "https://rentez.ae/assets/images/logo.png",
      className: "project-logo-white",
      category: "Web & Mobile App",
      status: "Live",
      duration: "Ongoing",
      teamSize: "4 developers",
      myRole: "Backend Developer",
      features: [
        "Admin panel for platform management",
        "User onboarding and verification",
        "Product listing, search, and rental management",
        "Secure payment processing (Stripe, Apple Pay)",
        "Mobile and web support for seamless experience"
      ],
      challenges: [
        "Building a scalable rental management system",
        "Integrating secure payment gateways",
        "Ensuring data privacy and user trust"
      ],
      technologies: [
        "Node.js", "MongoDB", "React", "JavaScript", "Jest", "Stripe", "Apple Pay", "Swift", "Kotlin", "Docker"
      ],
      demo: "https://rentez.ae",
      images: [],
      video: ""
    },
    {
      id: 5,
      title: "Bings Drip",
      subtitle: "Web Application",
      description:
        "Bings Drip is a static e-commerce website with an admin panel, built for practice and learning new technologies. It features a modern UI and basic e-commerce functionality.",
      image: require("../../assests/Screenshot (6).png"),
      logo: '',
      className: "project-logo-white",
      category: "Web Application",
      status: "Live",
      duration: "Personal Project",
      teamSize: "1 developer",
      myRole: "Frontend Developer",
      features: [
        "Modern e-commerce UI with product catalog",
        "Admin panel for product and order management",
        "Responsive design for all devices"
      ],
      challenges: [
        "Learning and implementing new frontend frameworks",
        "Building a maintainable and scalable UI"
      ],
      technologies: [
        "React Vite", "ShadCn", "TailwindCSS", "Javascript"
      ],
      demo: "https://bings-apparel.netlify.app",
      images: [],
      video: ""
    }
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
              // transition={{ duration: 0.2, delay: index * 0.1, ease: "easeInOut" }}
              // whileHover={{ y: 0, transition: { duration: 0.1 } }}
            >
              {/* IMAGE CONTAINER FIRST! */}
              <div className="project-image-container">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                )}
                {project.video && (
                  <div className="project-video-container">
                    <video
                      className="project-video-clean"
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '0', background: '#000' }}
                    />
                  </div>
                )}
                {project.images && project.images.length > 0 && (
                  <div className="project-images-carousel">
                    {project.images.map((img, idx) => (
                      <img key={idx} src={img} alt={project.title + ' screenshot ' + (idx + 1)} className="project-carousel-image" />
                    ))}
                  </div>
                )}
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
              {/* PROJECT CONTENT BELOW IMAGE */}
              <div className="project-content">
                <div className="project-header">
                  {project.logo && (
                    <img src={project.logo} alt={project.title + ' logo'} className="project-logo-inline" />
                  )}
                  <div className="project-titles">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <div className="project-meta">
                    <span className="duration">{project.duration}</span>
                    <span className="team-size">Team: {project.teamSize}</span>
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
                  <a href={project.demo} className="action-btn demo-btn" target="_blank" rel="noopener noreferrer">
                    <LuExternalLink />
                    Live Demo
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
