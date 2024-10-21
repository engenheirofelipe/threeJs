import * as THREE from 'three';

// inicialize scene
const scene = new THREE.Scene();

// add objects to scene
const cubeGeometry = new THREE.BoxGeometry(3,64,64)

const cubeMaterial = new THREE.MeshBasicMaterial({color:'red'})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

// initialize camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth /  window.innerHeight0, 0.1 , 30 )

camera.position.z = 20

scene.add(camera)

// render

const canvas = document.querySelector('.threejs')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene, camera)
