import * as THREE from 'three';
import { WEBGL } from 'ADDONS/capabilities/WebGL.js';

if (WEBGL.isWebGLAvailable()) {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation loop
    function animate() {
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);
} else {
    // If WebGL is not available, display an error message
    const warning = WEBGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
}
