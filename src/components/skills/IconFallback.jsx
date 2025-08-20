import React from 'react';

// Create fallback icons for technologies
const IconFallback = ({ name, size = 60, className = "" }) => {
  const getIconProps = (techName) => {
    const lowerName = techName.toLowerCase();
    
    const iconMap = {
      'nestjs': { bg: 'linear-gradient(135deg, #e0234e, #ff4757)', text: 'NJ', color: '#fff' },
      'postgresql': { bg: 'linear-gradient(135deg, #336791, #4a90a4)', text: 'PG', color: '#fff' },
      'redis': { bg: 'linear-gradient(135deg, #dc382d, #ff4757)', text: 'RD', color: '#fff' },
      'typescript': { bg: 'linear-gradient(135deg, #3178c6, #4285f4)', text: 'TS', color: '#fff' },
      'aws': { bg: 'linear-gradient(135deg, #ff9900, #ff6b00)', text: 'AWS', color: '#000', fontSize: '0.7rem' },
      'graphql': { bg: 'linear-gradient(135deg, #e10098, #ff1744)', text: 'GQL', color: '#fff', fontSize: '0.6rem' },
      'microservices': { bg: 'linear-gradient(135deg, #4caf50, #66bb6a)', text: 'MS', color: '#fff' },
      'digital-auxilius': { bg: 'linear-gradient(135deg, #2196f3, #3f51b5)', text: 'DA', color: '#fff' }
    };
    
    return iconMap[lowerName] || { 
      bg: 'linear-gradient(135deg, #6c7293, #8692a6)', 
      text: techName.substring(0, 2).toUpperCase(), 
      color: '#fff' 
    };
  };

  const props = getIconProps(name);
  
  return (
    <div
      className={`icon-fallback ${className}`}
      style={{
        width: size,
        height: size,
        background: props.bg,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: props.color,
        fontWeight: 'bold',
        fontSize: props.fontSize || '1rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        border: '2px solid rgba(255,255,255,0.1)'
      }}
    >
      {props.text}
    </div>
  );
};

export default IconFallback;
