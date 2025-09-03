import React, { useRef, useEffect } from 'react';
import EffectContainer from './EffectContainer';

const Effect9ThreeJs: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    // Geometry
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0x9333ea, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 5;

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
        if (mountRef.current) {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
    }
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <EffectContainer className="bg-neutral-950">
      <div ref={mountRef} className="absolute inset-0 z-0" />
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold md:text-7xl">Three.js</h1>
        <p className="text-xl">3D Rendering</p>
      </div>
    </EffectContainer>
  );
};

export default Effect9ThreeJs;