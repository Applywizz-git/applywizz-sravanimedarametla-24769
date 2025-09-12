import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const DataNodes: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  const { positions, connections } = useMemo(() => {
    const nodeCount = 50;
    const positions = new Float32Array(nodeCount * 3);
    const connections: Array<[number, number]> = [];

    // Generate random positions for data nodes
    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    // Create connections between nearby nodes (simulating data flow)
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = Math.sqrt(
          Math.pow(positions[i * 3] - positions[j * 3], 2) +
          Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
          Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2)
        );
        
        if (distance < 3 && Math.random() > 0.7) {
          connections.push([i, j]);
        }
      }
    }

    return { positions, connections };
  }, []);

  useFrame((state) => {
    if (prefersReducedMotion) return;
    
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
    
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      {/* Data Nodes */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#14B8A6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>

      {/* Data Connections */}
      <group ref={linesRef}>
        {connections.map(([start, end], index) => (
          <Line
            key={index}
            points={[
              [positions[start * 3], positions[start * 3 + 1], positions[start * 3 + 2]],
              [positions[end * 3], positions[end * 3 + 1], positions[end * 3 + 2]]
            ]}
            color="#7C3AED"
            opacity={0.2}
            transparent
            lineWidth={1}
          />
        ))}
      </group>
    </>
  );
};

const SystemArchitecture: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion || !groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Central Processing Hub */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshBasicMaterial color="#F59E0B" opacity={0.3} transparent />
      </mesh>

      {/* Orbiting Data Pods */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 0.5) * 0.5,
              Math.sin(angle) * radius
            ]}
          >
            <boxGeometry args={[0.1, 0.1, 0.1]} />
            <meshBasicMaterial color="#14B8A6" opacity={0.4} transparent />
          </mesh>
        );
      })}
    </group>
  );
};

interface DataBackgroundProps {
  className?: string;
}

export const DataBackground: React.FC<DataBackgroundProps> = ({ className = '' }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={`canvas-3d ${className}`}>
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      </div>
    );
  }

  return (
    <div className={`canvas-3d ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} />
        
        <DataNodes />
        <SystemArchitecture />
      </Canvas>
    </div>
  );
};