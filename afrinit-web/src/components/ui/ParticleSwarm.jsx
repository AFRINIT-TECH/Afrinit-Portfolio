import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1728;

const ParticleCloud = ({ animate }) => {
  const meshRef = useRef(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.2), []);
  const material = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: "#6d001a",
        depthWrite: false,
        opacity: 0.7,
        transparent: true,
      }),
    [],
  );

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const side = Math.ceil(Math.cbrt(PARTICLE_COUNT));
    const spacing = 1.6;
    const offset = ((side - 1) * spacing) / 2;

    for (let index = 0; index < PARTICLE_COUNT; index += 1) {
      const x = index % side;
      const y = Math.floor(index / side) % side;
      const z = Math.floor(index / (side * side));
      const scale = 0.65 + ((index * 7) % 4) * 0.12;

      dummy.position.set(x * spacing - offset, y * spacing - offset, z * spacing - offset);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(index, dummy.matrix);
    }

    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
  }, [dummy]);

  useFrame(({ clock }) => {
    if (!animate || !meshRef.current) return;

    const elapsed = clock.getElapsedTime();
    meshRef.current.rotation.y = elapsed * 0.07;
    meshRef.current.rotation.x = Math.sin(elapsed * 0.25) * 0.04;
  });

  return (
    <instancedMesh
      args={[geometry, material, PARTICLE_COUNT]}
      frustumCulled={false}
      ref={meshRef}
    />
  );
};

export const ParticleSwarm = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.14]"
    >
      <Canvas
        camera={{ position: [0, 0, 31], fov: 46 }}
        dpr={[1, 1.5]}
        frameloop={reduceMotion ? "demand" : "always"}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ParticleCloud animate={!reduceMotion} />
      </Canvas>
    </div>
  );
};

export default ParticleSwarm;
