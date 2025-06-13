'use client';

import { Canvas } from '@react-three/fiber';
import MeshComponent from './mesh';

const Blob = () => {
  return (
    <div id="blob" className="absolute -right-10 size-[500px] sm:-right-40 sm:top-10 sm:size-[520px]">
      <Canvas camera={{ fov: 45, position: [0, 0, 5], near: 0.1, far: 1000 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight color="#a07dde" />
        <directionalLight color="#fff" intensity={0.7} position={[0, 500, 200]} />
        <directionalLight color="#fff" intensity={0.25} position={[0, -500, 400]} />

        <MeshComponent />
      </Canvas>
    </div>
  );
};

export default Blob;
