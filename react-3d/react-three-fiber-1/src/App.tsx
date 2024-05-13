import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import './App.css';
import { Mesh } from 'three';

interface Terraforming {
  positions: [number, number, number];
  progress: number;
}

// function TestSphere() {

//   const meshRef = useRef<Mesh | null>(null);
//   const texture = useLoader(THREE.TextureLoader, 'test.jpeg');
//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.003;
//       meshRef.current.rotation.y += 0.001;
//     }
//   });
//   return (
//     <group >
//       <mesh ref={meshRef}>
//         <Sphere args={[1, 32, 32]} position={[0, 3, 0]} >
//      
//           <meshStandardMaterial map={texture} attach='material' transparent opacity={0.95} />
//         </Sphere>
//       </mesh>
//     </group>
//   );
// }
function SphereComponent({ positions, progress }: Terraforming) {
  const meshRef = useRef<Mesh | null>(null);
  const texture = useLoader(THREE.TextureLoader, 'test.jpeg');
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
        <Starparticles isComplete={progress == 1} />
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]} >
          {
            progress == 1 ?
              <meshBasicMaterial attach='material' map={texture} />
              :
              <meshStandardMaterial map={texture} attach='material' transparent opacity={progress} />
          }
        </Sphere>
      </mesh>
    </group>
  );
}

function Starparticles({ isComplete }: { isComplete: boolean }) {
  const sceneRef = useRef<Mesh | null>(null);

  useFrame(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.x += 0.001;
      sceneRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      {isComplete ? (
        <Stars factor={0.2}
          radius={0.005}
          depth={0.65}
          speed={10} fade count={100} />
      ) : null}
    </>
  );
}

function App() {
  return (
    <div className='body'>
      <div className='container'>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <SphereComponent positions={[0, 0, 0]} progress={0.2} />
          <SphereComponent positions={[3, 0, 0]} progress={0.5} />
          <SphereComponent positions={[6, 0, 0]} progress={0.9} />
          <SphereComponent positions={[9, 0, 0]} progress={1} />
          {/* <TestSphere /> */}
        </Canvas>
      </div>
    </div>
  );
}

export default App;
