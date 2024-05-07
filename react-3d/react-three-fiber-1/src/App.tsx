import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

import React, { useRef } from 'react';
import * as THREE from 'three';
import './App.css'
import { Mesh } from 'three';

function TestSphere() {
  const meshRef = useRef<Mesh | null>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.001;

    }
  })
  return (
    <mesh ref={meshRef}>
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]} />
    </mesh>
  )
}

function BackgroundStars() {
  const sceneRef = useRef<Mesh | null>(null);

  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.x += 0.001;
      sceneRef.current.rotation.y += 0.001;
    }
  })
  return (
    <mesh ref={sceneRef}>
      <Stars />
    </mesh>
  )
}
function App() {

  return (
    <div className='body'>
      <div className='container'>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          {/* <Stars /> */}
          <BackgroundStars />
          <TestSphere />

        </Canvas>
      </div>
    </div>
  );
}

export default App;
