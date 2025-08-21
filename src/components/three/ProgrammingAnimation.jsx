import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const FloatingCodeBlock = ({ position, code, delay = 0 }) => {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      const time = state.clock.elapsedTime + delay;
      textRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.2;
      textRef.current.rotation.y = Math.sin(time * 0.4) * 0.1;
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.15}
      color="#00ff88"
      anchorX="center"
      anchorY="middle"
      font="/fonts/mono.woff"
    >
      {code}
    </Text>
  );
};

const CodeCube = () => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.rotation.y += 0.01;
      
      if (hovered) {
        groupRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  const codeSnippets = [
    "const app = () => {",
    "  return (",
    "    <div>",
    "      <h1>Hello</h1>",
    "    </div>",
    "  );",
    "}"
  ];

  return (
    <group 
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Main wireframe cube */}
      <mesh>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial
          color={hovered ? '#00ff88' : '#ffffff'}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Code snippets floating around */}
      {codeSnippets.map((code, index) => (
        <FloatingCodeBlock
          key={index}
          position={[
            Math.cos((index / codeSnippets.length) * Math.PI * 2) * 2.5,
            (index - codeSnippets.length / 2) * 0.3,
            Math.sin((index / codeSnippets.length) * Math.PI * 2) * 2.5
          ]}
          code={code}
          delay={index * 0.2}
        />
      ))}
      
      {/* Central glowing core */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={hovered ? 0.5 : 0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
};

const OrbitingIcons = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  const techIcons = ['{ }', '</ >', 'fn()', 'API', 'DB'];
  
  return (
    <group ref={groupRef}>
      {techIcons.map((icon, index) => (
        <Text
          key={index}
          position={[
            Math.cos((index / techIcons.length) * Math.PI * 2) * 4,
            Math.sin((index / techIcons.length) * Math.PI * 4) * 0.5,
            Math.sin((index / techIcons.length) * Math.PI * 2) * 4
          ]}
          fontSize={0.2}
          color="#ff6b00"
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>
      ))}
    </group>
  );
};

const ProgrammingAnimation = () => {
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#00ff88" />
        <pointLight position={[-5, 5, 5]} intensity={0.6} color="#ff6b00" />
        <directionalLight position={[0, 10, 0]} intensity={0.3} />
        
        <CodeCube />
        <OrbitingIcons />
        
        {/* Additional atmospheric lighting */}
        <pointLight position={[0, -3, 0]} intensity={0.2} color="#0066ff" />
      </Canvas>
    </div>
  );
};

export default ProgrammingAnimation;
