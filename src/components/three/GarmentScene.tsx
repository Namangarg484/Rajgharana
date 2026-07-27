import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import type { FabricSpec } from "@/data/house";

interface Props {
  fabric: FabricSpec;
  colour: string;
  category: string;
  detail: boolean;
}

/** Skirt profile for a lathed lehenga/anarkali silhouette. */
function skirtProfile(flare: number) {
  const pts: THREE.Vector2[] = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24;
    const y = -1.6 + t * 2.6;
    const radius = 0.16 + Math.pow(1 - t, 1.7) * flare;
    pts.push(new THREE.Vector2(radius, y));
  }
  return pts;
}

function Garment({ fabric, colour, category, detail }: Props) {
  const group = useRef<THREE.Group>(null);
  const cloth = useRef<THREE.Mesh>(null);

  const flare = category === "Saree" ? 0.75 : category === "Sharara" ? 1.0 : 1.15;
  const profile = useMemo(() => skirtProfile(flare), [flare]);

  const geometry = useMemo(() => {
    const g = new THREE.LatheGeometry(profile, 96);
    // Introduce vertical folds so the silhouette reads as cloth, not a cone.
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const angle = Math.atan2(z, x);
      const radial = Math.hypot(x, z);
      const foldDepth = 0.045 * fabric.drape * Math.sin(angle * 14) * ((y + 1.6) / 2.6);
      const r = radial + foldDepth;
      pos.setX(i, Math.cos(angle) * r);
      pos.setZ(i, Math.sin(angle) * r);
    }
    g.computeVertexNormals();
    return g;
  }, [profile, fabric.drape]);

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(colour),
        roughness: fabric.roughness,
        metalness: fabric.metalness,
        sheen: fabric.sheen,
        sheenRoughness: fabric.sheenRoughness,
        sheenColor: new THREE.Color("#e8cf9a"),
        clearcoat: fabric.clearcoat,
        side: THREE.DoubleSide,
      }),
    [colour, fabric],
  );

  const trimMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#c8a35a"),
        metalness: 0.85,
        roughness: 0.3,
        side: THREE.DoubleSide,
      }),
    [],
  );

  useFrame((state, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.18;
    if (cloth.current) {
      cloth.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={group} position={[0, detail ? -0.9 : 0, 0]} scale={detail ? 1.9 : 1}>
      {/* skirt */}
      <mesh geometry={geometry} material={material} castShadow receiveShadow />

      {/* gold hem band */}
      <mesh position={[0, -1.58, 0]} rotation={[-Math.PI / 2, 0, 0]} material={trimMaterial}>
        <ringGeometry args={[flare + 0.1, flare + 0.17, 96]} />
      </mesh>

      {/* bodice */}
      <mesh position={[0, 1.28, 0]} material={material}>
        <capsuleGeometry args={[0.26, 0.42, 8, 32]} />
      </mesh>

      {/* dupatta / pallu drape */}
      <mesh ref={cloth} position={[0.34, 0.72, 0.18]} rotation={[0.1, 0.5, -0.16]} material={material}>
        <planeGeometry args={[0.52, 2.1, 24, 48]} />
      </mesh>
    </group>
  );
}

function Studio() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={2.1} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.9} color="#cfd7e8" />
      <pointLight position={[0, -1.5, 3]} intensity={1.1} color="#f3dcae" />
    </>
  );
}

export default function GarmentScene(props: Props) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.4, 5.2], fov: 34 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#1a1a18"]} />
      <Studio />
      <Garment {...props} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.62, 0]} receiveShadow>
        <circleGeometry args={[3.2, 64]} />
        <meshStandardMaterial color="#111110" roughness={0.9} />
      </mesh>
      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
