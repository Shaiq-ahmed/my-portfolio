import React, { useEffect, useState } from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      {/* Layer 1 - Furthest back, slowest movement */}
      <div 
        className="parallax-layer layer-1"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        <div className="parallax-element element-1"></div>
        <div className="parallax-element element-2"></div>
        <div className="parallax-element element-3"></div>
      </div>

      {/* Layer 2 - Medium distance, medium speed */}
      <div 
        className="parallax-layer layer-2"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`
        }}
      >
        <div className="parallax-element element-4"></div>
        <div className="parallax-element element-5"></div>
      </div>

      {/* Layer 3 - Closest, fastest movement */}
      <div 
        className="parallax-layer layer-3"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <div className="parallax-element element-6"></div>
        <div className="parallax-element element-7"></div>
      </div>

      {/* Floating particles */}
      <div className="parallax-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxBackground;
