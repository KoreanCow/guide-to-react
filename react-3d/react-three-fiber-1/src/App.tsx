import { OrbitControls, Stars, Dodecahedron, Sphere } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';
import './App.css';
import { Mesh } from 'three';


function TestDode() {
  // const texture = useLoader(THREE.TextureLoader, '/public/flower.svg');
  return (
    <mesh>
      <Dodecahedron args={[1, 5]} />
    </mesh>
  )
}
function TestSphere() {
  const meshRef = useRef<Mesh | null>(null);
  const texture = useLoader(THREE.TextureLoader, '/public/flower.svg');

  texture.repeat.set(2, 2);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={[2, 0, 0]}>
      <mesh ref={meshRef}>
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]} >
          <meshBasicMaterial attach='material' map={texture} />
        </Sphere>
      </mesh>
    </group>
  );
}


function SphereComponent({ positions }: { positions: [number, number, number] }) {
  const meshRef = useRef<Mesh | null>(null);
  const texture = useLoader(THREE.TextureLoader, '/public/flower.svg');

  texture.repeat.set(2, 2);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group position={positions}>
      <mesh ref={meshRef}>
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]} >
          <meshBasicMaterial attach='material' map={texture} />
        </Sphere>
      </mesh>
    </group>
  );
}
function BackgroundStars() {
  const sceneRef = useRef<Mesh | null>(null);

  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.x += 0.001;
      sceneRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={sceneRef}>
      {/* <Sky></Sky> */}
      <Stars factor={6} />
      {/* 팩터 추가  */}
    </mesh>
  );
}

function App() {
  return (
    <div className='body'>
      <div className='container'>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <BackgroundStars />
          <TestDode />
          <SphereComponent positions={[4, 8, 0]} />
          <TestSphere />

        </Canvas>
      </div>
    </div>
  );
}

export default App;
