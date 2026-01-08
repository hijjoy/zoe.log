'use client';

import { Canvas } from '@react-three/fiber';
import MeshComponent from './mesh';

const Blob = () => {
  return (
    <div
      aria-hidden
      id="blob"
      className="-right-40 absolute top-10 size-[520px] md:-right-10 md:top-0 md:size-[500px]"
    >
      <Canvas
        camera={{ fov: 45, position: [0, 0, 5], near: 0.1, far: 1000 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight color="#a07dde" />
        <directionalLight
          color="#fff"
          intensity={0.7}
          position={[0, 500, 200]}
        />
        <directionalLight
          color="#fff"
          intensity={0.25}
          position={[0, -500, 400]}
        />

        <MeshComponent />
      </Canvas>
    </div>
  );
};

export default Blob;
