import { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

const MorphingGlass = () => {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(t / 2) / 2
            meshRef.current.rotation.y = Math.cos(t / 3) / 2
            meshRef.current.scale.setScalar(1 + Math.sin(t) * 0.1)
        }
    })

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2, 10]} />
            <meshStandardMaterial
                color="#8B5CF6"
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    )
}

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1800)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-none"
                    >
                        <div className="w-full h-full relative">
                            <Canvas camera={{ position: [0, 0, 5] }}>
                                <ambientLight intensity={1.5} />
                                <pointLight position={[10, 10, 10]} intensity={2} color="#8B5CF6" />
                                <MorphingGlass />
                            </Canvas>

                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="font-mono text-4xl font-black text-foreground tracking-[0.5em]"
                                >
                                    NAVYA<span className="text-primary">_</span>SHAJI
                                </motion.div>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 180 }}
                                    transition={{ delay: 0.7, duration: 1 }}
                                    className="h-[3px] bg-gradient-primary mt-8 rounded-full shadow-glow"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.6 }}
                className={loading ? "hidden" : "block"}
            >
                {children}
            </motion.div>
        </>
    )
}
