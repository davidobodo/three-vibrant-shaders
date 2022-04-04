import * as THREE from "three";

let orbitControls = require("three-orbit-controls")(THREE);
export default class Sketch {
    constructor() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("container").appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
        this.camera.position.z = 1;
        this.scene = new THREE.Scene();

        this.controls = new orbitControls(this.camera, this.renderer.domElement);

        this.time = 0;

        this.addMesh();
        this.render();
    }

    addMesh() {
        this.geometry = new THREE.PlaneBufferGeometry(0.5, 0.5);
        this.material = new THREE.MeshNormalMaterial({ side: THREE.DoubleSide });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }

    render() {
        this.time++;
        this.renderer.render(this.scene, this.camera);
        window.requestAnimationFrame(this.render.bind(this));
    }
}

new Sketch();
