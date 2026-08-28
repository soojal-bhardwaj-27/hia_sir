import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';

export default function BackgroundScene() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#d4af37" />

      {/* A single, elegant mechanical-inspired knot */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} position={[4, 0, -6]} scale={2}>
          <torusKnotGeometry args={[1.5, 0.4, 256, 64]} />
          <meshPhysicalMaterial 
            color="#2a2e35"
            metalness={0.9}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>
      
      {/* Soft shadow on an invisible ground plane */}
      <ContactShadows position={[4, -4.5, -6]} opacity={0.4} scale={10} blur={2} far={10} />
    </>
  );
}
