import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

const Fiber = () => {
  let camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer;
  let geometry,
    material,
    mesh:
      | THREE.Object3D<THREE.Event>
      | THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>;
  return <canvas id="canvas"></canvas>;
};

export default Fiber;
