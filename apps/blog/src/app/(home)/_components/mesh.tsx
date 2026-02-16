import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { createNoise3D } from 'simplex-noise';
import type { Mesh } from 'three';
import * as THREE from 'three';

const noise3D = createNoise3D();
const TIME_SCALE = 0.00001;
const SPEED = 40;
const SPIKE = 0.5;
const PROCESS = 1.2;
const NOISE_AMPLITUDE = 0.3;
const NORMAL_RECALCULATION_INTERVAL = 2;
const SPHERE_RADIUS = 0.8;
const SPHERE_SEGMENTS = 72;

const MeshComponent = () => {
  const ref = useRef<Mesh>(null);
  const vectorRef = useRef(new THREE.Vector3());
  const frameCountRef = useRef(0);

  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;

    const geometry = mesh.geometry;
    const positionAttribute = geometry.attributes.position;
    const positions = positionAttribute.array as Float32Array;
    const time = performance.now() * TIME_SCALE * SPEED * PROCESS ** 3;
    const spikes = SPIKE * PROCESS;
    const vector = vectorRef.current;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      vector
        .set(x, y, z)
        .normalize()
        .multiplyScalar(
          1 +
            NOISE_AMPLITUDE *
              noise3D(x * spikes, y * spikes, z * spikes + time),
        );

      positions[i] = vector.x;
      positions[i + 1] = vector.y;
      positions[i + 2] = vector.z;
    }

    positionAttribute.needsUpdate = true;

    frameCountRef.current += 1;
    if (frameCountRef.current % NORMAL_RECALCULATION_INTERVAL === 0) {
      geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry
        args={[SPHERE_RADIUS, SPHERE_SEGMENTS, SPHERE_SEGMENTS]}
      />
      <meshPhongMaterial color="#fff" shininess={700} />
    </mesh>
  );
};

export default MeshComponent;
