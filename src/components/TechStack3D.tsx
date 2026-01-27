import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

const TechIcon = ({ label, position, color }: { label: string, position: [number, number, number], color: string }) => {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.position.y += Math.sin(t + position[0]) * 0.003
            meshRef.current.rotation.x = Math.cos(t / 2) / 6
            meshRef.current.rotation.y = Math.sin(t / 2) / 6
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={position}>
                <mesh ref={meshRef}>
                    <boxGeometry args={[0.7, 0.7, 0.7]} />
                    <meshStandardMaterial
                        color={color}
                        roughness={0.1}
                        metalness={0.8}
                        emissive={color}
                        emissiveIntensity={0.6}
                    />
                    <Text
                        position={[0, 0, 0.36]}
                        fontSize={0.14}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                        font="/fonts/Inter-Bold.ttf"
                    >
                        {label}
                    </Text>
                </mesh>
            </group>
        </Float>
    )
}

const Scene = () => {
    return (
        <>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={2.5} color="#8B5CF6" />
            <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={3} castShadow />

            <TechIcon label="MDB" position={[-2.2, 1.2, 0]} color="#13aa52" />
            <TechIcon label="React" position={[2.2, 1.2, 0]} color="#3B82F6" />
            <TechIcon label="Node" position={[0, -1.5, 1]} color="#68a063" />
            <TechIcon label="TS" position={[-1.8, -0.8, -1]} color="#2D79C7" />
            <TechIcon label="JS" position={[1.8, -0.8, -1]} color="#F7DF1E" />

            {/* Pulsing Core */}
            <Float speed={4} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[0, 0, 0]}>
                    <octahedronGeometry args={[0.6, 0]} />
                    <meshStandardMaterial
                        color="#EC4899"
                        emissive="#EC4899"
                        emissiveIntensity={2}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
            </Float>

            <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={15} blur={3} far={10} color="#8b5cf6" />
            <Environment preset="city" />
        </>
    )
}

export const TechStack3D = () => {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
            <Canvas shadows dpr={[1, 2]} alpha>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
                <Scene />
            </Canvas>
        </div>
    )
}
