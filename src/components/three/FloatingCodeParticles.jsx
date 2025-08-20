import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const CodeParticle = ({ position, text, color = '#00ff88', size = 0.5 }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime + position[1]) * 0.2;
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.5;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={mesh} position={position}>
        <Text
          fontSize={size}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/JetBrainsMono-Regular.ttf"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
};

const TechSphere = ({ position, text, color = '#ff6b00' }) => {
  const sphereRef = useRef();
  
  useFrame((state) => {
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.02;
    sphereRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
  });

  return (
    <group position={position} ref={sphereRef}>
      <mesh>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial 
          color={color} 
          wireframe 
          transparent 
          opacity={0.6}
        />
      </mesh>
      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
};

const FloatingCodeParticles = () => {
  const codeSnippets = [
    'const', 'function', 'async', 'await', '{}', '=>', 'API', 'DB',
    'React', 'Node', 'SQL', 'REST', 'Git', 'CI/CD', 'AWS', 'Docker'
  ];

  const techSpheres = [
    { name: 'NestJS', color: '#ea2845' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Redis', color: '#dc382d' },
    { name: 'Docker', color: '#2496ed' },
    { name: 'GraphQL', color: '#e10098' },
    { name: 'TypeScript', color: '#3178c6' }
  ];

  const particles = useMemo(() => {
    return codeSnippets.map((text, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      text,
      color: `hsl(${(i * 45) % 360}, 70%, 60%)`
    }));
  }, []);

  const spheres = useMemo(() => {
    return techSpheres.map((tech, i) => ({
      position: [
        Math.cos(i * 1.5) * 8,
        Math.sin(i * 1.2) * 4,
        Math.sin(i * 0.8) * 6
      ],
      ...tech
    }));
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} />
      
      {particles.map((particle, index) => (
        <CodeParticle
          key={index}
          position={particle.position}
          text={particle.text}
          color={particle.color}
          size={0.3 + Math.random() * 0.3}
        />
      ))}
      
      {spheres.map((sphere, index) => (
        <TechSphere
          key={index}
          position={sphere.position}
          text={sphere.name}
          color={sphere.color}
        />
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default FloatingCodeParticles;
