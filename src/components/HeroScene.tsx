import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import { Suspense } from 'react'

function Orb() {
  return <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
    <Sphere args={[1.45, 64, 64]} scale={1.1}>
      <MeshDistortMaterial color="#a6f36b" roughness={0.18} metalness={0.7} distort={0.36} speed={1.8} />
    </Sphere>
  </Float>
}

export default function HeroScene() {
  return <div className="hero-canvas" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 5.5], fov: 40 }} dpr={[1, 1.6]}>
      <ambientLight intensity={1.4} />
      <pointLight position={[3, 4, 4]} intensity={45} color="#d8ffb5" />
      <pointLight position={[-4, -2, 2]} intensity={20} color="#5868ff" />
      <Suspense fallback={null}><Orb /><Stars radius={30} depth={12} count={450} factor={2} fade speed={0.4} /></Suspense>
    </Canvas>
  </div>
}