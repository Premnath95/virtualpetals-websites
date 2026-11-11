"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCloudHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 19);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Master Group for All 3D Assets
    const cloudSystem = new THREE.Group();
    scene.add(cloudSystem);

    // Lighting for Rich Pearlescent Shading (Purple / Cyan / Royal Blue)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0x7c3aed, 4.5, 40); // Violet
    keyLight.position.set(8, 8, 10);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x38bdf8, 3.5, 40); // Cyan
    fillLight.position.set(-8, -6, 8);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x2563eb, 3.0, 35); // Royal Blue
    rimLight.position.set(0, -8, -6);
    scene.add(rimLight);

    // ==========================================
    // 1. STYLIZED 3D CLOUD FORMATION (VOLUMETRIC)
    // ==========================================
    const cloudGroup = new THREE.Group();
    cloudSystem.add(cloudGroup);

    // High quality soft cloud material with pearlescent sheen
    const cloudMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.18,
      metalness: 0.1,
      transmission: 0.45, // Translucent glass/cloud look
      thickness: 1.8,
      clearcoat: 0.7,
      clearcoatRoughness: 0.2,
      ior: 1.35,
    });

    // 9 Interlocking Spheres forming an organic fluffy cloud
    const cloudSpheres = [
      { x: 0, y: 0, z: 0, r: 2.2 },        // Center base
      { x: -1.8, y: -0.3, z: 0.2, r: 1.6 },// Left bottom
      { x: 1.9, y: -0.3, z: -0.1, r: 1.6 },// Right bottom
      { x: -0.9, y: 1.1, z: 0.3, r: 1.7 }, // Left top dome
      { x: 1.1, y: 1.0, z: -0.2, r: 1.8 }, // Right top dome
      { x: 0.2, y: 1.5, z: 0.1, r: 1.4 },  // Peak top
      { x: -2.6, y: -0.6, z: 0.4, r: 1.1 },// Far left tail
      { x: 2.7, y: -0.6, z: 0.1, r: 1.1 }, // Far right tail
      { x: 0, y: -0.4, z: 1.2, r: 1.3 },   // Front depth puff
    ];

    cloudSpheres.forEach((s) => {
      const geo = new THREE.SphereGeometry(s.r, 32, 32);
      const mesh = new THREE.Mesh(geo, cloudMaterial);
      mesh.position.set(s.x, s.y, s.z);
      cloudGroup.add(mesh);
    });

    // ==========================================
    // 2. GLOWING ORBITAL RINGS
    // ==========================================
    const ringGroup = new THREE.Group();
    cloudSystem.add(ringGroup);

    // Orbital Ring 1: Cyan / Azure
    const ring1Geo = new THREE.RingGeometry(4.8, 4.88, 80);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.3;
    ring1.rotation.y = Math.PI / 10;
    ringGroup.add(ring1);

    // Orbital Ring 2: Violet / M365
    const ring2Geo = new THREE.RingGeometry(5.6, 5.68, 80);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 2.7;
    ring2.rotation.y = -Math.PI / 8;
    ringGroup.add(ring2);

    // Orbital Ring 3: Royal Blue / DevOps
    const ring3Geo = new THREE.RingGeometry(6.4, 6.46, 80);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = Math.PI / 6;
    ringGroup.add(ring3);

    // ==========================================
    // 3. FLOATING 3D SATELLITE NODES
    // ==========================================
    const nodeData = [
      { color: 0x38bdf8, size: 0.45, label: "Azure" },
      { color: 0x7c3aed, size: 0.45, label: "M365" },
      { color: 0x2563eb, size: 0.4, label: "DevOps" },
      { color: 0x10b981, size: 0.4, label: "Security" },
    ];

    const nodes: THREE.Mesh[] = [];
    const nodeAngles = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];
    const nodeRadii = [4.8, 5.6, 6.4, 5.2];

    nodeData.forEach((n, idx) => {
      const geo = new THREE.IcosahedronGeometry(n.size, 1);
      const mat = new THREE.MeshStandardMaterial({
        color: n.color,
        roughness: 0.2,
        metalness: 0.7,
        emissive: n.color,
        emissiveIntensity: 0.6,
      });
      const mesh = new THREE.Mesh(geo, mat);
      cloudSystem.add(mesh);
      nodes.push(mesh);
    });

    // ==========================================
    // 4. PARTICLE CLOUD NEBULA
    // ==========================================
    const particleCount = 400;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const cCyan = new THREE.Color("#38BDF8");
    const cViolet = new THREE.Color("#7C3AED");
    const cBlue = new THREE.Color("#2563EB");

    for (let i = 0; i < particleCount; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const dist = THREE.MathUtils.randFloat(4.5, 9.5);

      particlePositions[i * 3] = dist * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = dist * Math.sin(phi) * Math.sin(theta) * 0.75;
      particlePositions[i * 3 + 2] = dist * Math.cos(phi);

      const mix = Math.random();
      const col = mix < 0.4 ? cCyan : mix < 0.75 ? cViolet : cBlue;
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    cloudSystem.add(particles);

    // ==========================================
    // 5. INTERACTION & ANIMATION LOOP
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = mouseX * 0.4;
      targetY = mouseY * 0.3;
    };

    container.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse tilt dampening
      cloudSystem.rotation.y += (targetX - cloudSystem.rotation.y) * 0.05;
      cloudSystem.rotation.x += (targetY - cloudSystem.rotation.x) * 0.05;

      // Soft continuous breathing & floating of cloud
      cloudGroup.position.y = Math.sin(t * 1.5) * 0.25;
      cloudGroup.rotation.y = Math.sin(t * 0.5) * 0.08;

      // Rotate orbital rings
      ring1.rotation.z += 0.006;
      ring2.rotation.z -= 0.005;
      ring3.rotation.z += 0.004;

      // Orbit satellite nodes
      nodes.forEach((node, i) => {
        const speed = 0.5 + i * 0.15;
        const currentAngle = nodeAngles[i] + t * speed * 0.5;
        const r = nodeRadii[i];
        node.position.x = Math.cos(currentAngle) * r;
        node.position.z = Math.sin(currentAngle) * r * 0.7;
        node.position.y = Math.sin(t * 2 + i) * 0.6;
        node.rotation.x += 0.02;
        node.rotation.y += 0.03;
      });

      // Slowly rotate particle field
      particles.rotation.y += 0.0015;

      // Shift light position slightly with mouse
      keyLight.position.x = 8 + mouseX * 3;
      keyLight.position.y = 8 + mouseY * 3;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      cloudMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[580px] flex items-center justify-center">
      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Cloud Infrastructure - Move mouse to rotate"
      />

      {/* Luminous Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-violet-600/30 via-blue-600/25 to-cyan-400/20 rounded-full blur-[80px] pointer-events-none -z-10" />
    </div>
  );
}
