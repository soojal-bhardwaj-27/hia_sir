import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial, ContactShadows } from '@react-three/drei';

function AbstractShapes() {
  const sphereRef = useRef();
  const torusRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.2;
      sphereRef.current.rotation.x = t * 0.1;
    }
    if (torusRef.current) {
      torusRef.current.rotation.y = t * -0.15;
      torusRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[3, 1, -2]}>
        <mesh ref={sphereRef} scale={1.5}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial 
            color="#FF5A36" 
            envMapIntensity={1} 
            clearcoat={1} 
            clearcoatRoughness={0.1} 
            metalness={0.1} 
            roughness={0.2} 
            distort={0.4} 
            speed={2} 
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5} position={[-3, -1, -3]}>
        <mesh ref={torusRef} scale={1.2}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <meshPhysicalMaterial 
            color="#FF5A36" 
            metalness={0.4} 
            roughness={0.1} 
            clearcoat={1} 
            transmission={0.5}
            thickness={0.5}
          />
        </mesh>
      </Float>
    </>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="city" />
        <AbstractShapes />
        <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={10} />
      </Canvas>
    </div>
  );
}
