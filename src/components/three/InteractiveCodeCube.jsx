import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const CodeCube = () => {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  const codeTexts = [
    'Backend\nArchitect', // Front
    'Full Stack\nDeveloper', // Back
    'Database\nDesigner', // Right
    'API\nEngineer', // Left
    'DevOps\nEnthusiast', // Top
    'Code\nOptimizer' // Bottom
  ];

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.005;
      cubeRef.current.rotation.y += 0.01;
      
      if (hovered) {
        cubeRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 3) * 0.05);
      } else {
        cubeRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group
      ref={cubeRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Box args={[2, 2, 2]}>
        <meshStandardMaterial
          color={hovered ? '#00ff88' : '#333333'}
          wireframe
          transparent
          opacity={0.8}
        />
      </Box>
      
      {codeTexts.map((text, index) => {
        const positions = [
          [0, 0, 1.1], // Front
          [0, 0, -1.1], // Back
          [1.1, 0, 0], // Right
          [-1.1, 0, 0], // Left
          [0, 1.1, 0], // Top
          [0, -1.1, 0] // Bottom
        ];
        
        const rotations = [
          [0, 0, 0], // Front
          [0, Math.PI, 0], // Back
          [0, Math.PI/2, 0], // Right
          [0, -Math.PI/2, 0], // Left
          [-Math.PI/2, 0, 0], // Top
          [Math.PI/2, 0, 0] // Bottom
        ];

        return (
          <Text
            key={index}
            position={positions[index]}
            rotation={rotations[index]}
            fontSize={0.2}
            color={hovered ? '#ffffff' : '#00ff88'}
            anchorX="center"
            anchorY="middle"
            maxWidth={1.5}
          >
            {text}
          </Text>
        );
      })}
    </group>
  );
};

const InteractiveCodeCube = () => {
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} />
        
        <CodeCube />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default InteractiveCodeCube;
