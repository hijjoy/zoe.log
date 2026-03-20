'use client';

import { Canvas } from '@react-three/fiber';
import TamagotchiModel from './tamagotchi-model';

const Tamagotchi = () => {
  return (
    <div
      aria-hidden
      id="blob"
      className="-right-40 md:-right-10 absolute top-10 size-[520px] md:top-0 md:size-[500px]"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ fov: 45, position: [0, 0, 4], near: 0.1, far: 1000 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          color="#ffffff"
          intensity={0.8}
          position={[2, 3, 4]}
        />
        <directionalLight
          color="#ffffff"
          intensity={0.3}
          position={[-2, -1, 3]}
        />
        <TamagotchiModel />
      </Canvas>
    </div>
  );
};

export default Tamagotchi;
