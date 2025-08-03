// components/main/StarBackground.tsx
"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { RootState } from "@react-three/fiber/dist/declarations/src/core/store";
import * as THREE from "three";
// @ts-expect-error maath-random.esm does not have type declarations
import * as random from "maath/random/dist/maath-random.esm";

// THE FIX IS HERE: Removed 'props' from the function signature
const StarBackground = () => {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state: RootState, delta: number) => {
    if (ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="fixed inset-0 w-full h-screen z-[-1] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;