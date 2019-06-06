// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
// Import process.js file which contains definitions required by react-dom
// to run on the client.
import '../process';
import {VRInstance} from 'react-vr-web';
import DomOverlayModule from '../DomOverlayModule';
import WebVRPolyFill from 'webvr-polyfill';

function init(bundle, parent, options) {
  // Add polyfill to allow for VR on iOS devices
  const polyfill = new WebVRPolyFill();

  // TODO: Uncomment the three lines below to enable the Native Module
  // const domOverlayContainer = document.createElement('div');
  // domOverlayContainer.id = 'dom-overlay';
  // const domOverlayModule = new DomOverlayModule(domOverlayContainer);

  const vr = new VRInstance(bundle, 'IteraGame', parent, {
    // Add custom options here
    /* raycasters: [{
      getType: () => "simple",
      getRayOrigin: () => [0, 0, 0],
      getRayDirection: () => [0, 0, -1],
      drawsCursor: () => true
    }],
    cursorVisibility: 'visible', */
    enableHotReload: true,
    ...options,
    // TODO: Uncomment the line below to enable the Native Module
    // nativeModules: [domOverlayModule],
  });

  // TODO: Uncomment the line below to enable the Native Module
  // vr.player._wrapper.appendChild(domOverlayContainer);

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};
