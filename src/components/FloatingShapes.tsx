import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Sphere, Torus, MeshDistortMaterial, ContactShadows, Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const FloatingElements = () => {
    const points = useMemo(() => {
        const positions = new Float32Array(500 * 3);
        for (let i = 0; i < 500; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, []);

    return (
        <>
            <ambientLight intensity={1.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={3} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#EBF4DD" />

            {/* Main Metallic Sphere */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1} position={[-4, 2, 0]}>
                <mesh>
                    <sphereGeometry args={[1.2, 64, 64]} />
                    <meshStandardMaterial
                        color="#A85832"
                        metalness={1}
                        roughness={0.1}
                        envMapIntensity={2}
                    />
                </mesh>
            </Float>

            {/* Copper Ring */}
            <Float speed={3} rotationIntensity={2} floatIntensity={1} position={[4, 5, -2]}>
                <mesh rotation={[Math.PI / 4, 0, 0]}>
                    <torusGeometry args={[1.5, 0.4, 32, 100]} />
                    <meshStandardMaterial
                        color="#8B4513"
                        metalness={1}
                        roughness={0.15}
                    />
                </mesh>
            </Float>

            {/* Silver Pill shape (distorted sphere) */}
            <Float speed={4} rotationIntensity={1.5} floatIntensity={2} position={[5, -2, 1]}>
                <mesh scale={[1.5, 1, 1]}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshStandardMaterial
                        color="#5A7863"
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>
            </Float>

            {/* Floating Particles */}
            <Points positions={points}>
                <PointMaterial
                    transparent
                    color="#5A7863"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>

            <Environment preset="studio" />
        </>
    );
};

export const FloatingShapes = () => {
    return (
        <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none overflow-hidden bg-[#fafaf8]">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <FloatingElements />
            </Canvas>
            {/* Soft Overlays to match the mood */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
        </div>
    );
};
