import { useState, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'

const TechCore = () => {
    const meshRef = useRef<THREE.Mesh>(null)
    const pointsRef = useRef<THREE.Points>(null)

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.2
            meshRef.current.rotation.y = t * 0.3
        }
        if (pointsRef.current) {
            pointsRef.current.rotation.y = -t * 0.1
        }
    })

    return (
        <group>
            <mesh ref={meshRef}>
                <octahedronGeometry args={[2, 0]} />
                <meshStandardMaterial
                    color="#5A7863"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </mesh>
            <points ref={pointsRef}>
                <sphereGeometry args={[2.5, 32, 32]} />
                <pointsMaterial
                    color="#90AB8B"
                    size={0.02}
                    transparent
                    opacity={0.5}
                />
            </points>
        </group>
    )
}

const TerminalLog = () => {
    const logs = [
        "Initializing dev_environment...",
        "Fetching repository: navya-shaji/portfolio",
        "Loading MERN stack modules...",
        "Connecting to MongoDB Atlas...",
        "Hydrating UI components...",
        "Optimizing assets...",
        "Ready."
    ];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < logs.length - 1) {
            const timer = setTimeout(() => setIndex(prev => prev + 1), 200);
            return () => clearTimeout(timer);
        }
    }, [index]);

    return (
        <div className="font-mono text-[10px] text-primary/40 text-left space-y-1">
            {logs.slice(0, index + 1).map((log, i) => (
                <div key={i} className="flex gap-2">
                    <span className="text-secondary opacity-50">$</span>
                    <span>{log}</span>
                </div>
            ))}
        </div>
    );
}

const BinaryRain = () => {
    const snippets = ["01", "void", "main()", "<link>", "div", "export", "async", "fetch", "{}", "[]", "const", "=>"];
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03] select-none">
            <div className="flex justify-around w-full">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -100 }}
                        animate={{ y: ['0vh', '110vh'] }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                        className="text-[10px] font-mono leading-none flex flex-col gap-4 whitespace-nowrap"
                    >
                        {Array.from({ length: 20 }).map((_, j) => (
                            <span key={j}>{snippets[Math.floor(Math.random() * snippets.length)]}</span>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
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
                            {/* Coding Background Decor */}
                            <BinaryRain />

                            <Canvas camera={{ position: [0, 0, 5] }}>
                                <ambientLight intensity={1} />
                                <pointLight position={[10, 10, 10]} intensity={1.5} color="#5A7863" />
                                <TechCore />
                            </Canvas>

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                <div className="relative group">
                                    <motion.div
                                        initial={{ opacity: 0, tracking: '1em' }}
                                        animate={{ opacity: 1, tracking: '0.4em' }}
                                        transition={{ duration: 1 }}
                                        className="font-mono text-3xl md:text-5xl font-black text-foreground relative z-10"
                                    >
                                        NAVYA<span className="text-primary animate-pulse">_</span>SHAJI
                                    </motion.div>

                                    {/* Glitch Decorative Boxes */}
                                    <div className="absolute -inset-4 border border-primary/10 -z-10 group-hover:border-primary/20 transition-colors" />
                                </div>

                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 140 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="h-[2px] bg-primary/20 mt-12 mb-8 rounded-full"
                                />

                                <div className="max-w-xs w-full">
                                    <TerminalLog />
                                </div>
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
