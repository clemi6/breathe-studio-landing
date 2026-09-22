import React, { useRef, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

// Import du modèle généré à l'étape 3
import { Model as PixelCursor } from "./PixelCursorModel";

gsap.registerPlugin(ScrollTrigger);

const AnimatedModel = () => {
  const meshRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  const buttonPosition = (selector: string, depth: number) => {
    const button = document.querySelector<HTMLElement>(selector);
    if (!button) return null;

    const bounds = button.getBoundingClientRect();
    const point = new THREE.Vector3(
      ((bounds.left + bounds.width / 2) / window.innerWidth) * 2 - 1,
      -((bounds.top + bounds.height / 2) / window.innerHeight) * 2 + 1,
      0,
    );
    point.unproject(camera);

    const direction = point.sub(camera.position).normalize();
    const distance = (depth - camera.position.z) / direction.z;
    return camera.position.clone().add(direction.multiplyScalar(distance));
  };

  useGSAP(() => {
    if (!meshRef.current) return;

    // Position de départ : en haut à gauche
    meshRef.current.position.set(2.5, -0.15, 0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Lie l'animation au scroll avec un léger lissage
      },
    });

      const contactPosition = buttonPosition('[data-cursor-target="contact"]', -0.4);
      const projectsPosition = buttonPosition('[data-cursor-target="projects"]', -0.9);

      if (!contactPosition || !projectsPosition) return;

    tl.to(
      meshRef.current.position,
      {
          x: contactPosition.x,
          y: contactPosition.y,
          z: contactPosition.z,
        ease: "none",
      },
        0.32,
    );

    tl.to(
      meshRef.current.rotation,
      {
        x: Math.PI * 0.35,
        y: Math.PI * 0.75,
        z: -Math.PI * 0.2,
        ease: "none",
      },
      0.32,
    );

      tl.to(
        meshRef.current.position,
        {
          x: projectsPosition.x,
          y: projectsPosition.y,
          z: projectsPosition.z,
          ease: "none",
        },
        0.62,
      );

      tl.to(
        meshRef.current.rotation,
        {
          x: Math.PI * 0.8,
          y: Math.PI * 1.5,
          z: Math.PI * 0.35,
          ease: "none",
        },
        0.62,
      );

      tl.to(
        meshRef.current.position,
        {
          x: -1.5,
          y: -1.2,
          z: -2.2,
          ease: "none",
        },
        0.86,
      );

      tl.to(
        meshRef.current.rotation,
        {
          x: Math.PI * 1.2,
          y: Math.PI * 2.2,
          z: Math.PI * 0.7,
          ease: "none",
        },
        0.86,
      );
  });

  return (
    <group ref={meshRef}>
      {/* Ajustez le scale si le modèle importé est trop grand ou trop petit */}
      <PixelCursor scale={[0.0008, 0.0008, 0.0008]} position={[-0.154, 0.022, 0.485]} />
    </group>
  );
};

export default function FloatingCursor() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none", // Laisse passer les clics vers le site en dessous
          zIndex: 50,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ pointerEvents: "none" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <AnimatedModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
