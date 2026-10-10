import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, Line } from '@react-three/drei';
import * as THREE from 'three';

// Scene colors are read from the same semantic tokens as the page.
function Network({ palette }) {
  const group = useRef();
  const core = useRef();
  const points = useMemo(() => Array.from({ length: 34 }, (_, i) => {
    const y = 1 - (i / 33) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = i * 2.399963;
    return new THREE.Vector3(Math.cos(theta) * radius * 2.12, y * 2.12, Math.sin(theta) * radius * 2.12);
  }), []);
  const links = useMemo(() => points.flatMap((p, i) => points.slice(i + 1).filter(q => p.distanceTo(q) < 1.58).map(q => [p, q])), [points]);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.065;
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.15, 0.025);
    }
    if (core.current) { core.current.rotation.y += delta * 0.12; core.current.rotation.z += delta * 0.07; }
  });
  return <group ref={group} rotation={[0.12, 0.2, 0.16]}>
    <mesh><sphereGeometry args={[2.02, 40, 24]} /><meshBasicMaterial color={palette.wire} wireframe transparent opacity={0.14} /></mesh>
    {links.map((line, i) => <Line key={i} points={line} color={palette.wire} transparent opacity={0.3} lineWidth={0.65} />)}
    {points.map((point, i) => <mesh key={i} position={point}><sphereGeometry args={[i % 4 === 0 ? 0.044 : 0.022, 8, 8]} /><meshBasicMaterial color={i % 3 === 0 ? palette.cyan : palette.light} /></mesh>)}
    <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.25}><mesh ref={core}><icosahedronGeometry args={[1.05, 1]} /><meshPhysicalMaterial color={palette.core} metalness={0.5} roughness={0.24} emissive={palette.core} emissiveIntensity={0.32} clearcoat={1} /></mesh><mesh><icosahedronGeometry args={[1.065, 1]} /><meshBasicMaterial color={palette.light} wireframe transparent opacity={0.48} /></mesh></Float>
    {[0, 1, 2].map(i => <mesh key={i} rotation={[Math.PI / 2 + i * 0.5, i * 0.7, i * 0.45]}><torusGeometry args={[2.45 + i * 0.13, 0.008, 6, 180]} /><meshBasicMaterial color={i === 1 ? palette.cyan : palette.wire} transparent opacity={0.38} /></mesh>)}
    <Html position={[-2.2, 1.35, 0]} center><div className="scene-label"><span className="scene-label-dot" />neural_network.py</div></Html>
    <Html position={[2.05, -0.95, 0]} center><div className="scene-label cyan-label">&lt; intelligence /&gt;</div></Html>
    <Html position={[0.85, 2.1, 0]} center><div className="scene-symbol">✦</div></Html>
  </group>;
}
export default function HeroScene() {
  const style = getComputedStyle(document.documentElement);
  const palette = { wire: style.getPropertyValue('--scene-wire').trim(), core: style.getPropertyValue('--scene-core').trim(), cyan: style.getPropertyValue('--scene-cyan').trim(), light: style.getPropertyValue('--scene-light').trim() };
  return <Canvas camera={{ position: [0, 0, 7.7], fov: 43 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }} aria-label="Interactive rotating neural network sculpture">
    <ambientLight intensity={1.7} /><directionalLight position={[3, 4, 5]} intensity={3} color={palette.light} /><pointLight position={[-3, 0, 2]} intensity={22} color={palette.wire} />
    <Suspense fallback={null}><Network palette={palette} /></Suspense>
  </Canvas>;
}
