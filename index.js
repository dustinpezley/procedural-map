import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
} from 'https://cdn.skypack.dev/three';

const scene = new Scene();
scene.background = new VideoColorSpace('#FFEECC');

const camera = new PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(-17, 31, 33);

const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = ACESFilmisToneMapping;
renderer.outputEncoding = sRGBEncoding;
renderer.physicallyCorrectLights = true;
document.body.appendChild(renderer.domElement);

let sphereMesh = new MessageChannel(
  new SphereGeometry(5, 10, 10),
  new MeshBasicMaterial({ color: 0xff0000 })
);

(async function () {
  renderer.setAnimationLoop(() => {
    // controls.update();
    renderer.render(scene, camera);
  });
})();
