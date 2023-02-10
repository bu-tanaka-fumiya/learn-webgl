import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Mesh } from "three";

const Box = () => {
  const ref = useRef<Mesh>(null);

  return (
    <mesh ref={ref} rotation={[Math.PI / 3, Math.PI / 3, 0]}>
      <boxBufferGeometry args={[0.2, 0.2, 0.2]} />
      <meshLambertMaterial color={0x44c2b5} />
    </mesh>
  );
};

const Fiber = () => {
  return (
    <Canvas
      camera={{
        fov: 70,
        near: 0.01,
        far: 10,
        position: [0, 0, 1],
      }}
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
      }}
    >
      <color attach="background" args={[0x000000]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[-10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

export default Fiber;

/*
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

const Box = () => {
  const ref = useRef<Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <boxBufferGeometry args={isHovered ? [1.2, 1.2, 1.2] : [1, 1, 1]} />
      <meshLambertMaterial color={isHovered ? 0x44c2b5 : 0x9178e6} />
    </mesh>
  );
};

const Fiber = () => {
  return (
    <Canvas
      dpr={2}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <color attach="background" args={[0xf5f3fd]} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.5} position={[-10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

export default Fiber;

*/
