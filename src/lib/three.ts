import * as THREE from "three";

let camera: THREE.PerspectiveCamera,
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer;
let geometry,
  material,
  mesh:
    | THREE.Object3D<THREE.Event>
    | THREE.Mesh<THREE.BoxGeometry, THREE.MeshNormalMaterial>;

export const threejs = (canvasId: string) => {
  const aspect = window.innerWidth / window.innerHeight;
  // camera = new THREE.OrthographicCamera(
  //   -1.6,
  //   +1.6,
  //   1.6 / aspect,
  //   -1.6 / aspect,
  //   // window.innerWidth / window.innerHeight,
  //   0.01,
  //   10
  // );
  camera = new THREE.PerspectiveCamera(70, aspect, 0.01, 10);
  camera.position.z = 1;

  scene = new THREE.Scene();

  geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  material = new THREE.MeshNormalMaterial();

  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = 60;
  mesh.rotation.y = 60;
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: document.querySelector(canvasId) || undefined,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
  // renderer.setAnimationLoop(animation);
  // document.body.appendChild(renderer.domElement);
};

const animation = (time: number) => {
  mesh.rotation.x = time / 2000;
  mesh.rotation.y = time / 1000;

  renderer.render(scene, camera);
};
