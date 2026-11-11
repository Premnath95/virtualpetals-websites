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
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for all cloud assets
    const cloudGroup = new THREE.Group();
    scene.add(cloudGroup);

    // 1. Particle Cloud Nebula (600 particles for high performance)
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color("#38BDF8"); // Cyan
    const color2 = new THREE.Color("#7C3AED"); // Violet
    const color3 = new THREE.Color("#2563EB"); // Royal Blue

    for (let i = 0; i < particleCount; i++) {
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);
      const radius = THREE.MathUtils.randFloat(3, 7.5);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta) * 0.7;
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      // Interpolate colors between cyan, royal blue, and violet
      const mixedColor = color1.clone();
      const factor = Math.random();
      if (factor < 0.4) {
        mixedColor.lerp(color2, Math.random());
      } else {
        mixedColor.lerp(color3, Math.random());
      }

      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    cloudGroup.add(particles);

    // 2. Central Core Sphere (Wireframe Hologram)
    const coreGeometry = new THREE.IcosahedronGeometry(2.4, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    cloudGroup.add(coreMesh);

    // Outer orbital rings
    const ringGeo1 = new THREE.RingGeometry(3.6, 3.65, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.5;
    cloudGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(4.4, 4.45, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    cloudGroup.add(ring2);

    // 3. Floating Technology Nodes
    const nodeMaterials = [
      new THREE.MeshBasicMaterial({ color: 0x38bdf8 }), // Azure
      new THREE.MeshBasicMaterial({ color: 0x7c3aed }), // M365
      new THREE.MeshBasicMaterial({ color: 0x2563eb }), // DevOps
      new THREE.MeshBasicMaterial({ color: 0x10b981 }), // Security
    ];

    const nodes: THREE.Mesh[] = [];
    const nodeCoords = [
      { x: 3.8, y: 1.2, z: 1.0 },
      { x: -3.4, y: 2.0, z: -1.2 },
      { x: 2.5, y: -2.8, z: 1.5 },
      { x: -2.8, y: -1.8, z: 2.2 },
    ];

    nodeCoords.forEach((coord, i) => {
      const geo = new THREE.SphereGeometry(0.32, 16, 16);
      const mesh = new THREE.Mesh(geo, nodeMaterials[i]);
      mesh.position.set(coord.x, coord.y, coord.z);
      cloudGroup.add(mesh);
      nodes.push(mesh);
    });

    // Connecting Network Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
    });

    const linePoints: THREE.Vector3[] = [];
    nodes.forEach((n) => {
      linePoints.push(new THREE.Vector3(0, 0, 0));
      linePoints.push(n.position);
    });

    const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    cloudGroup.add(lineMesh);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.45;
      targetRotationX = y * 0.35;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous subtle ambient rotation
      cloudGroup.rotation.y += 0.003;
      coreMesh.rotation.y -= 0.005;
      coreMesh.rotation.x += 0.002;

      ring1.rotation.z += 0.004;
      ring2.rotation.z -= 0.003;

      // Smooth mouse follow interpolation
      cloudGroup.rotation.y += (targetRotationY - cloudGroup.rotation.y) * 0.05;
      cloudGroup.rotation.x += (targetRotationX - cloudGroup.rotation.x) * 0.05;

      // Floating wave motion on nodes
      nodes.forEach((node, idx) => {
        node.position.y += Math.sin(elapsedTime * 2 + idx) * 0.003;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Cloud Topology - Drag or hover to explore"
      />

      {/* Ambient background glow beneath canvas */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-violet-600/15 to-cyan-400/10 blur-3xl pointer-events-none -z-10 rounded-full" />
    </div>
  );
}
