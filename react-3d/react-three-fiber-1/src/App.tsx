import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import './App.css';
import { Mesh } from 'three';

function SphereComponent({ positions }: { positions: [number, number, number] }) {
  const meshRef = useRef<Mesh | null>(null);
  const texture = useLoader(THREE.TextureLoader, '/public/test.jpeg');

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
function Starparticles() {
  const sceneRef = useRef<Mesh | null>(null);

  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.x += 0.001;
      sceneRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={sceneRef}>
      <Stars factor={0.2} radius={0.001} depth={0.6} speed={10} fade count={100} />
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
          <Starparticles />
          <SphereComponent positions={[0, 0, 0]} />
          <SphereComponent positions={[5, 2, 5]} />
          <SphereComponent positions={[10, 10, 10]} />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
