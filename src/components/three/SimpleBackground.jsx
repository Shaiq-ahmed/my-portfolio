import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const FloatingCube = ({ position, color = '#00ff88' }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.02;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.6}
      />
    </mesh>
  );
};

const FloatingTorus = ({ position, color = '#ff6b00' }) => {
  const mesh = useRef();
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.z += 0.01;
      mesh.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.5 + position[1]) * 0.3;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <torusGeometry args={[0.3, 0.1, 8, 16]} />
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.4}
      />
    </mesh>
  );
};

const SimpleBackground = () => {
  const cubes = [
    { position: [-5, 2, -3], color: '#00ff88' },
    { position: [4, -1, -5], color: '#ff6b00' },
    { position: [-2, -3, -4], color: '#3b82f6' },
    { position: [6, 3, -6], color: '#e10098' },
    { position: [-6, -2, -2], color: '#fbbf24' }
  ];

  const toruses = [
    { position: [3, 4, -4], color: '#ff6b00' },
    { position: [-4, 1, -6], color: '#3b82f6' },
    { position: [2, -4, -3], color: '#e10098' },
    { position: [-3, 3, -5], color: '#00ff88' }
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} />
      
      {cubes.map((cube, index) => (
        <FloatingCube
          key={`cube-${index}`}
          position={cube.position}
          color={cube.color}
        />
      ))}
      
      {toruses.map((torus, index) => (
        <FloatingTorus
          key={`torus-${index}`}
          position={torus.position}
          color={torus.color}
        />
      ))}
    </Canvas>
  );
};

export default SimpleBackground;
