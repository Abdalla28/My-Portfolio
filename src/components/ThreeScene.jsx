import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from "three";

export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 500, 2000);

    // Store references to maze orbs for animation
    const mazeOrbs = [];

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(20, 30, 70);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.maxPolarAngle = Math.PI / 2;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const dirLight = new THREE.DirectionalLight(0xfff0cc, 1.5);
    dirLight.position.set(50, 100, 50);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const textureLoader = new TextureLoader();
    const wallTexture = textureLoader.load("/textures/stone.jpg");

    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.4,
      metalness: 0.5,
    });

    const wallColors = [0x444444, 0x666666, 0x888888];
    const mazeSize = 12;
    const tileSize = 4;

    const mazeGroup = new THREE.Group();

    // Floor
    for (let x = 0; x < mazeSize; x++) {
      for (let z = 0; z < mazeSize; z++) {
        const floor = new THREE.Mesh(
          new THREE.PlaneGeometry(tileSize, tileSize),
          floorMaterial
        );
        floor.rotation.x = -Math.PI / 2;
        floor.position.set(x * tileSize, 0, z * tileSize);
        mazeGroup.add(floor);
      }
    }

    // Creative Maze Walls
    for (let x = 0; x < mazeSize; x++) {
      for (let z = 0; z < mazeSize; z++) {
        const isWall = Math.random() > 0.7;
        if (isWall || x === 0 || z === 0 || x === mazeSize - 1 || z === mazeSize - 1) {
          const height = tileSize * (1.5 + Math.random());
          const wall = new THREE.Mesh(
            new THREE.BoxGeometry(tileSize, height, tileSize),
            new THREE.MeshStandardMaterial({
              color: wallColors[Math.floor(Math.random() * wallColors.length)],
              roughness: 0.8,
              metalness: 0.3,
              map: wallTexture,
            })
          );
          wall.position.set(x * tileSize, height / 2, z * tileSize);
          mazeGroup.add(wall);
        } else if (Math.random() < 0.08) {
          // Add glowing orb (crystal) inside maze
          const glowColor = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 70%)`);
          const glow = new THREE.Mesh(
            new THREE.SphereGeometry(1.2, 24, 24), // Bigger orb
            new THREE.MeshBasicMaterial({ color: glowColor })
          );
          glow.position.set(x * tileSize, 1.2, z * tileSize);
          const glowLight = new THREE.PointLight(glowColor.getHex(), 1, 10);
          glowLight.position.copy(glow.position);
          mazeGroup.add(glow, glowLight);
          // Store for animation
          mazeOrbs.push({ mesh: glow, light: glowLight, basePos: { x: x * tileSize, z: z * tileSize }, speed: Math.random() * 2 + 2, phase: Math.random() * Math.PI * 2 });
        }
      }
    }

    mazeGroup.position.set(
      -(mazeSize * tileSize) / 2,
      0,
      -(mazeSize * tileSize) / 2
    );
    scene.add(mazeGroup);

    // Orb light
    const orb = new THREE.PointLight(0xff00ff, 2, 30);
    const orbMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xff00ff })
    );
    orb.add(orbMesh);
    scene.add(orb);

    // Galaxy Stars
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const starVertices = [];

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });

    const starfield = new THREE.Points(starGeometry, starMaterial);
    scene.add(starfield);

    // Cursor movement
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 3 - 1;
      mouseY = (event.clientY / window.innerHeight) * 3 - 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Animate
    let angle = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      angle += 0.01;
      orb.position.set(
        (Math.sin(angle) * (mazeSize * tileSize)) / 3,
        5 + Math.sin(angle * 2) * 2,
        (Math.cos(angle) * (mazeSize * tileSize)) / 3
      );

      // Animate maze orbs to move fast in a circular pattern
      mazeOrbs.forEach((orbObj, i) => {
        const t = angle * orbObj.speed + orbObj.phase;
        orbObj.mesh.position.x = orbObj.basePos.x + Math.sin(t) * 1.5;
        orbObj.mesh.position.y = 1.2 + Math.abs(Math.cos(t) * 1.2);
        orbObj.mesh.position.z = orbObj.basePos.z + Math.cos(t) * 1.5;
        orbObj.light.position.copy(orbObj.mesh.position);
      });

      // Make the maze move with the cursor
      mazeGroup.rotation.y = mouseX * 0.3;
      mazeGroup.rotation.x = mouseY * 0.15;

      starfield.rotation.y = mouseX * 0.3;
      starfield.rotation.x = mouseY * 0.15;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        background: "black",
      }}
    />
  );
}
