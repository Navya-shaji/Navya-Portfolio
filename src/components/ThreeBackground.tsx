import { Canvas, useFrame } from '@react-three/fiber'
// import { Float, Sphere, MeshDistortMaterial, Stars, OrbitControls } from '@react-three/drei'
import { useRef, Component, ReactNode } from 'react'
import * as THREE from 'three'

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.5
            meshRef.current.rotation.y += delta * 0.5
        }
    })

    return (
        <mesh ref={meshRef} scale={1.5}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#3b82f6" />
        </mesh>
    )
}

const Scene = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <AnimatedSphere />
        </>
    )
}


class ErrorBoundary extends Component<{ children: ReactNode, fallback: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode, fallback: ReactNode }) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error) {
        console.error("ThreeJS Error:", error)
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }
        return this.props.children
    }
}

export const ThreeBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 w-full h-full opacity-60">
            <ErrorBoundary fallback={<div className="w-full h-full bg-transparent" />}>
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 45 }}
                    gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
                >
                    <Scene />
                </Canvas>
            </ErrorBoundary>
        </div>
    )
}
