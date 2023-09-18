import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const SmallSphere = ({ textureRef }) => {
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const sphereRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
    camera.zoom = 1;
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 300);
    rendererRef.current = renderer;

    sceneRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.5, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 1,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphereRef.current = sphere;

    camera.position.z = 2;

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(textureRef.current, (textura) => {
      sphere.material = new THREE.MeshBasicMaterial({
        map: textura,
        transparent: true,
        opacity: 1,
      });
    });

    // Initialize OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);

      // Update controls
      controls.update();

      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      scene.remove(sphereRef.current);
      sphereRef.current.geometry.dispose();
      sphereRef.current.material.dispose();

      // Dispose of controls
      controls.dispose();

      rendererRef.current.domElement.remove();
      rendererRef.current.dispose();
    };
  }, [textureRef]);

  return <div className="SmallSkillsContainer" ref={sceneRef}></div>;
};

const SkillScene = () => {
  const textureRef1 = useRef("../../textures/html.png");
  const textureRef2 = useRef("../../textures/css.png");
  const textureRef3 = useRef("../../textures/bootstrap.png");
  const textureRef4 = useRef("../../textures/javascript.png");
  const textureRef5 = useRef("../../textures/reactjs.png");
  const textureRef6 = useRef("../../textures/git.png");
  return (
    <div className="SkillsContainer">
      <SmallSphere textureRef={textureRef1} />
      <SmallSphere textureRef={textureRef2} />
      <SmallSphere textureRef={textureRef3} />
      <SmallSphere textureRef={textureRef4} />
      <SmallSphere textureRef={textureRef5} />
      <SmallSphere textureRef={textureRef6} />
    </div>
  );
};

export default SkillScene;
