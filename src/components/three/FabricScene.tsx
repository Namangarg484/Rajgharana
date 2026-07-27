import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { FabricSpec } from "@/data/house";

function ClothPanel({ fabric }: { fabric: FabricSpec }) {
  const mesh = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.PlaneGeometry(3.1, 4.2, 60, 80), []);
  const base = useMemo(() => Float32Array.from(geometry.attributes.position.array), [geometry]);

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(fabric.hex),
        roughness: fabric.roughness,
        metalness: fabric.metalness,
        sheen: fabric.sheen,
        sheenRoughness: fabric.sheenRoughness,
        sheenColor: new THREE.Color("#e8cf9a"),
        clearcoat: fabric.clearcoat,
        transmission: fabric.key === "organza" ? 0.35 : 0,
        thickness: fabric.key === "organza" ? 0.6 : 0,
        side: THREE.DoubleSide,
      }),
    [fabric],
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const pos = geometry.attributes.position as THREE.BufferAttribute;
    const amp = fabric.drape;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3];
      const y = base[i * 3 + 1];
      const hang = (y + 2.1) / 4.2; // 0 at hem, 1 at top
      const fold = Math.sin(x * 3.1 + t * 0.55) * 0.22 * amp * (1 - hang * 0.55);
      const sway = Math.sin(y * 1.4 + t * 0.35) * 0.09 * amp;
      pos.setZ(i, fold + sway);
    }
    pos.needsUpdate = true;
    geometry.computeVertexNormals();
    if (mesh.current) mesh.current.rotation.y = Math.sin(t * 0.22) * 0.28;
  });

  return <mesh ref={mesh} geometry={geometry} material={material} castShadow receiveShadow />;
}

export default function FabricScene({ fabric }: { fabric: FabricSpec }) {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5.4], fov: 38 }}>
      <color attach="background" args={["#1a1a18"]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} castShadow />
      <directionalLight position={[-4, 1, 2]} intensity={0.8} color="#cbd6e6" />
      <pointLight position={[0, -2, 3]} intensity={1.2} color="#f0d6a4" />
      <ClothPanel fabric={fabric} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={1.0} maxPolarAngle={2.1} />
    </Canvas>
  );
}
