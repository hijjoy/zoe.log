import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { createNoise3D } from "simplex-noise";

const noise3D = createNoise3D();
const SPEED = 40;
const SPIKE = 0.5;
const PROCESS = 1.2;

const MeshComponent = () => {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    const mesh = ref.current;
    if (!mesh) return;

    const positions = mesh.geometry.attributes.position.array as Float32Array;
    const time = performance.now() * 0.00001 * SPEED * Math.pow(PROCESS, 3);
    const spikes = SPIKE * PROCESS;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];

      const vector = new THREE.Vector3(x, y, z)
        .normalize()
        .multiplyScalar(
          1 + 0.3 * noise3D(x * spikes, y * spikes, z * spikes + time)
        );

      positions[i] = vector.x;
      positions[i + 1] = vector.y;
      positions[i + 2] = vector.z;
    }

    mesh.geometry.attributes.position.needsUpdate = true;
    mesh.geometry.computeVertexNormals();
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.8, 130, 130]} />
      <meshPhongMaterial color="##a07dde" shininess={700} />
    </mesh>
  );
};

export default MeshComponent;
