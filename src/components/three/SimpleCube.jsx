import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const RotatingCube = () => {
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);
  
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
    <mesh
      ref={cubeRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={hovered ? '#00ff88' : '#333333'}
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const SimpleCube = () => {
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={0.8} />
        
        <RotatingCube />
      </Canvas>
    </div>
  );
};

export default SimpleCube;
