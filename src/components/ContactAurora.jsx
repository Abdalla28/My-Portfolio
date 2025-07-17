import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ContactAurora() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    // Aurora/Light Trails
    const auroraGroup = new THREE.Group();
    scene.add(auroraGroup);

    const colors = [0x7f5fff, 0x00ffd0, 0x8ec6ff, 0x66ffcc, 0x9f7fff];
    const numTrails = 5;
    const trailSegments = 120;
    const trails = [];

    for (let i = 0; i < numTrails; i++) {
      const points = [];
      for (let j = 0; j < trailSegments; j++) {
        points.push(new THREE.Vector3(
          (j - trailSegments / 2) * 0.5,
          Math.sin(j * 0.15 + i) * 2 + i * 2,
          Math.cos(j * 0.1 + i) * 2
        ));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(curve, trailSegments * 2, 0.32 + Math.random() * 0.18, 16, false);
      const material = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.y = -8 + i * 3.5;
      mesh.position.x = (i - 2) * 2.5;
      mesh.position.z = -i * 2;
      auroraGroup.add(mesh);
      trails.push({ mesh, baseY: mesh.position.y, color: colors[i % colors.length], i });
    }

    // Soft glow background
    const glowGeometry = new THREE.PlaneGeometry(80, 40);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x7f5fff,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.z = -30;
    scene.add(glow);

    // Removed AxesHelper (the shape above the aurora)
    // const axesHelper = new THREE.AxesHelper(10);
    // scene.add(axesHelper);

    // Animation
    let t = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      t += 0.012;
      trails.forEach(({ mesh, i }) => {
        const points = [];
        for (let j = 0; j < trailSegments; j++) {
          points.push(new THREE.Vector3(
            (j - trailSegments / 2) * 0.5,
            Math.sin(j * 0.15 + i + t * (1.1 + i * 0.13)) * (2.2 + Math.sin(t + i) * 0.7) + Math.cos(t * 0.7 + i) * 1.2,
            Math.cos(j * 0.1 + i + t * (0.7 + i * 0.09)) * 2
          ));
        }
        const curve = new THREE.CatmullRomCurve3(points);
        mesh.geometry.dispose();
        mesh.geometry = new THREE.TubeGeometry(curve, trailSegments * 2, 0.32 + Math.sin(t + i) * 0.12 + 0.18, 16, false);
      });
      auroraGroup.rotation.y = Math.sin(t * 0.2) * 0.12;
      auroraGroup.rotation.x = Math.cos(t * 0.13) * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    let resizeTimeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };
    window.addEventListener("resize", debouncedResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}
