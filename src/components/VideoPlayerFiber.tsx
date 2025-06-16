import { useVideoTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

function VideoPlane ({url}: {url: string}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const { gl } = useThree();
    
    // Handle context loss
    useEffect(() => {
        const handleContextLost = (event: Event) => {
            event.preventDefault();
            console.log('WebGL context lost, attempting to restore...');
        };
        
        const handleContextRestored = () => {
            console.log('WebGL context restored');
        };
        
        const canvas = gl.domElement;
        canvas.addEventListener('webglcontextlost', handleContextLost);
        canvas.addEventListener('webglcontextrestored', handleContextRestored);
        
        return () => {
            canvas.removeEventListener('webglcontextlost', handleContextLost);
            canvas.removeEventListener('webglcontextrestored', handleContextRestored);
        };
    }, [gl]);

    const videoTexture = useVideoTexture(url, {
        crossOrigin: 'Anonymous',
        muted: true,
        loop: true,
        autoplay: true
    });

    return(
        <mesh ref={meshRef}>
            <planeGeometry args={[4, 2.25]} />
            <meshBasicMaterial map={videoTexture} toneMapped={false} />
        </mesh>
    )
}
export default VideoPlane