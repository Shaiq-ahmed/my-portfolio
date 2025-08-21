import React, { useEffect, useRef, useState } from "react";
import "./skills.css";
import { s_list, skillCategories, getSkillsByCategory } from "./s_list";
import { motion, useInView, useAnimation } from "framer-motion";
import CodingLaptopScene from "../three/CodingLaptopScene";
import IconFallback from "./IconFallback";
import SectionHeading from "../shared/SectionHeading";

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isIconFallback = typeof skill.icon === 'string' && skill.icon.includes('-fallback');

  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: `0 10px 30px rgba(0, 255, 136, 0.4)`
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="skill-icon-container">
        {isIconFallback || imageError ? (
          <IconFallback name={skill.name} size={60} className="skill-icon" />
        ) : (
          <>
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="skill-icon"
              onError={() => setImageError(true)}
            />
          </>
        )}
      </div>
      <h4 className="skill-name">{skill.name}</h4>
      {isHovered && (
        <motion.div
          className="skill-category-tag"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {skillCategories[skill.category]}
        </motion.div>
      )}
    </motion.div>
  );
};

const SkillCategory = ({ category, skills, categoryName }) => {
  return (
    <motion.div
      className="skill-category-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="category-title">{categoryName}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categorizedSkills = getSkillsByCategory();
  const priorityCategories = ['frontend', 'backend', 'database', 'cloud', 'api', 'tools'];

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const filteredSkills = selectedCategory === 'all' 
    ? s_list 
    : categorizedSkills[selectedCategory] || [];

  return (
    <div className="container-skills" ref={ref} id="skills">
      <div className="skills-section">
        <SectionHeading
          title="Technical Skills"
          subtitle="My Tech Stack"
          description="Technologies and tools I use to build modern web applications"
          variant="primary"
        />

        <div className="skills-3d-showcase">
          <CodingLaptopScene />
        </div>

        <motion.div
          className="category-filters"
          initial={{ opacity: 0 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
          }}
        >
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Technologies
          </button>
          {priorityCategories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {skillCategories[category]}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="skills-container"
          initial={{ opacity: 0 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } }
          }}
        >
          {selectedCategory === 'all' ? (
            priorityCategories.map(category => 
              categorizedSkills[category] && (
                <SkillCategory
                  key={category}
                  category={category}
                  skills={categorizedSkills[category]}
                  categoryName={skillCategories[category]}
                />
              )
            )
          ) : (
            <div className="skills-grid">
              {filteredSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={mainControls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
          }}
        >
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">7+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{Object.keys(categorizedSkills).length}</span>
              <span className="stat-label">Tech Categories</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
