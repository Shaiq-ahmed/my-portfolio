import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const FloatingCode = ({ position, char, delay = 0 }) => {
  const textRef = useRef();
  const [opacity, setOpacity] = useState(0);
  
  useFrame((state) => {
    if (textRef.current) {
      const time = state.clock.elapsedTime + delay;
      textRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.3;
      textRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
      
      // Fade in and out effect
      const fadeOpacity = (Math.sin(time * 0.4) + 1) * 0.3 + 0.2;
      setOpacity(fadeOpacity);
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.3}
      color="#00ff88"
      anchorX="center"
      anchorY="middle"
    >
      {char}
    </Text>
  );
};

const Laptop = () => {
  const laptopRef = useRef();
  const screenRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (laptopRef.current) {
      laptopRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      if (hovered) {
        laptopRef.current.position.y = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      }
    }
    
    if (screenRef.current) {
      // Screen glow effect
      screenRef.current.material.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }
  });

  return (
    <group 
      ref={laptopRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Laptop Base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[3, 0.2, 2]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Laptop Screen */}
      <mesh ref={screenRef} position={[0, 0.8, -0.9]} rotation={[-Math.PI * 0.1, 0, 0]}>
        <boxGeometry args={[2.8, 1.8, 0.1]} />
        <meshStandardMaterial 
          color="#000000" 
          emissive="#00ff88"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Screen Content */}
      <mesh position={[0, 0.8, -0.85]} rotation={[-Math.PI * 0.1, 0, 0]}>
        <planeGeometry args={[2.5, 1.5]} />
        <meshBasicMaterial color="#001100" transparent opacity={0.8} />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, 0, 0.3]}>
        <boxGeometry args={[2.4, 0.05, 1.4]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Trackpad */}
      <mesh position={[0, 0.03, 0.7]}>
        <boxGeometry args={[0.8, 0.02, 0.5]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
    </group>
  );
};

const CodeParticles = () => {
  const codeChars = ['{', '}', '<', '>', '/', '=', ';', '(', ')', '[', ']', '+', '-', '*'];
  const particles = [];
  
  for (let i = 0; i < 20; i++) {
    const angle = (i / 20) * Math.PI * 2;
    const radius = 4 + Math.random() * 2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 4;
    
    particles.push({
      position: [x, y, z],
      char: codeChars[Math.floor(Math.random() * codeChars.length)],
      delay: i * 0.1
    });
  }
  
  return (
    <>
      {particles.map((particle, index) => (
        <FloatingCode
          key={index}
          position={particle.position}
          char={particle.char}
          delay={particle.delay}
        />
      ))}
    </>
  );
};

const CodingLaptopScene = () => {
  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#00ff88" />
        <pointLight position={[-5, 5, 5]} intensity={0.6} color="#ff6b00" />
        <directionalLight position={[0, 10, 0]} intensity={0.3} />
        
        <Laptop />
        <CodeParticles />
        
        {/* Additional atmospheric lighting */}
        <pointLight position={[0, -2, 0]} intensity={0.2} color="#0066ff" />
      </Canvas>
    </div>
  );
};

export default CodingLaptopScene;
