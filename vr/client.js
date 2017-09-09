// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {VRInstance} from 'react-vr-web';

// for the native modules
import AsteroidsModule from '../components/nativeModules/asteroidsModule';
import * as THREE from 'three';

function init(bundle, parent, options) {

  // new scene and nativeModules instances
  const scene = new THREE.Scene();
  const Asteroids = new AsteroidsModule(scene);


  const vr = new VRInstance(bundle, 'solarSystem', parent, {
    // Add custom options here
    nativeModules: [ Asteroids ],
    scene,
    ...options,
  });
  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
    Asteroids.render();

  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
