import {Module} from 'react-vr-web';
import * as THREE from 'three';

export default class AsteroidsModule extends Module {
  constructor(scene) {
    // The name of the module in NativeModules
    super('Asteroids');

    this.scene = scene;
    this.time = 0;
    this.meshes = [];
  }

  populate() {
    const amount = 30;

    for (let i = 0; i < amount; i++) {
      const radius = Math.floor(Math.random() * 6) + 1;
      const detail = 1;
      const distance = 400 + Math.floor(Math.random() * 10);
      const speed = Math.floor(Math.random() * 30) + 1;

      const geometry = new THREE.TetrahedronGeometry(radius, detail);
      const material = new THREE.MeshLambertMaterial({color: 0x7F492A});
      const mesh = new THREE.Mesh(geometry, material);

      // set random initial position
      const alpha = Math.floor(Math.random() * 360) + 1;
      const x = distance * Math.sin(alpha);
      const z = distance * Math.cos(alpha);
      mesh.position.set(x, 0, z);

      mesh.speed = speed;
      mesh.distance = distance;
      mesh.alpha = alpha;
      mesh.topOffset = Math.floor(Math.random() * 1) + 20;

      this.meshes.push(mesh);
      this.scene.add(mesh);
    }
  }

  render() {
    this.time++;

    if (this.meshes.length) {
      this.meshes.forEach((mesh) => {
        // up and down animation
        mesh.position.y = 4 * Math.cos((mesh.topOffset + this.time) / 10) - 50;

        // orbit animation
        const quaternion = new THREE.Quaternion();
        quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 3000 );

        mesh.position.applyQuaternion( quaternion );

        // rotate animation
        mesh.rotation.x += 0.04;
        mesh.rotation.y += 0.03;
        mesh.rotation.z += 0.02;
      });
    }
  }
}