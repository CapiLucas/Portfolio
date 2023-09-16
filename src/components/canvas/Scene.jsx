import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Scene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    const Controls = new OrbitControls(camera, renderer.domElement);
    Controls.enableDamping = true;
    Controls.enableZoom = false;

    const resize = () => {
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();

      let scaleFactor = 0.7;
      if (currentMount.clientWidth < 840) {
        scaleFactor = 0.4;
      }
      if (currentMount.clientWidth < 460) {
        scaleFactor = 0.2;
      }
      gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
    };
    window.addEventListener("resize", resize);

    const gltfLoader = new GLTFLoader();
    let gltf;

    gltfLoader.load(
      "../planet/scene.gltf",
      (loadedGltf) => {
        gltf = loadedGltf;
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material.transparent = true;
            child.material.opacity = 1;
          }
        });

        scene.add(gltf.scene);

        let scaleFactor = 0.7;
        if (currentMount.clientWidth < 840) {
          scaleFactor = 0.4;
        }
        if (currentMount.clientWidth < 460) {
          scaleFactor = 0.3;
        }
        gltf.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
      },
      () => {},
      () => {}
    );

    const AO = new THREE.AmbientLight(0xffffff);
    scene.add(AO);

    const animate = () => {
      Controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      currentMount.removeChild(renderer.domElement);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="Contenedor3D"
      ref={mountRef}
      style={{ width: "80%", height: "70%" }}
    ></div>
  );
};

export default Scene;