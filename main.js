import './style.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xD68C27, wireframe: true});
const geometry = new THREE.TorusGeometry(10, 1, 16, 100);
const torus1 = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.TorusGeometry(12, 1, 16, 100);
const torus2 = new THREE.Mesh(geometry2, material);


scene.add(torus1);
scene.add(torus2);
const controls = new OrbitControls(camera, renderer.domElement);

const myTexture = new THREE.TextureLoader().load('backgroundImg3.png');

const myMesh = new THREE.Mesh(
  new THREE.BoxGeometry(9,9,9),
  new THREE.MeshBasicMaterial( { map: myTexture})
);

scene.add(myMesh);

function animate() {
  requestAnimationFrame(animate);
  torus1.rotation.x += 0.005;
  torus1.rotation.y += 0.0025;
  torus1.rotation.z += 0.005;
  torus2.rotation.x += 0.0025;
  torus2.rotation.y += 0.005;
  torus2.rotation.z += 0.0025;
  myMesh.rotation.y += 0.0025
  controls.update();
  renderer.render(scene, camera);
}



animate();
