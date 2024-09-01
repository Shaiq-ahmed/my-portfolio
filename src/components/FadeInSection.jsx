import React, { useState, useEffect, useRef } from "react";

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false); // Initially hidden
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.unobserve(domRef.current);
  }, [domRef]);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
