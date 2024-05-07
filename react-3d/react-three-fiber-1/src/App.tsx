import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Sphere() {
  return (
    <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="red" roughness={0.5} metalness={0.5} />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} />
      <Sphere />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
