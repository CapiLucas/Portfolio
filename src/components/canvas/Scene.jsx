import React from 'react'
import { useRef, useEffect } from 'react'
import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
 
const  Scene = () => {
    const mountRef = useRef(null)
    useEffect(() => {
        const currentMount = mountRef.current
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            25,
            currentMount.clientWidth / currentMount.clientHeight,
            0.1,
            1000
        )
        camera.position.z = 4
        scene.add(camera)

        //render
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(currentMount.clientWidth,currentMount.clientHeight)
        currentMount.appendChild(renderer.domElement)

        //Controls
        const Controls = new OrbitControls(camera, renderer.domElement)

        //cube
        const cube = new THREE.Mesh(
            new THREE.BoxGeometry(1,1,1),
            new THREE.MeshBasicMaterial( {color: 0x00ff00} ) 
        )
        scene.add(cube)

        //render the scene
        const animate = () => {
            renderer.render(scene, camera)
            requestAnimationFrame(animate)
        }
        animate()

        renderer.render(scene, camera)


        //clean up
        return() => {
            currentMount.removeChild(renderer.domElement)
        }

    },[])

    return (
    <div className='Contenedor3D' ref={mountRef} style={{width:"100%", height:"100%"}}>
        <h1>Hola Mundo</h1>
    </div>
  )
}

export default Scene