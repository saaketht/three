import * as THREE from 'three';

// root of scenegraph structure
const scene = new THREE.Scene(); 
// scene observation
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 10 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // main object
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement ); // add to DOM body

// sphere code
const sphere_geometry = new THREE.SphereGeometry( 1 ); // vertex data
const sphere_material = new THREE.MeshBasicMaterial( { color: 0xaafaaa } ); // surface properties
const sphere = new THREE.Mesh( sphere_geometry, sphere_material );
scene.add( sphere );

// line code
const points = [];
points.push( new THREE.Vector3( -5, 0, 0 ) );
points.push( new THREE.Vector3( 0, 0, -5 ) );
points.push( new THREE.Vector3( 0, -5, 0 ) );
points.push( new THREE.Vector3( 0, 0, 0 ) );
points.push( new THREE.Vector3( 0, -5, 0 ) );
points.push( new THREE.Vector3( 0, -5, 0 ) );
const line_geometry = new THREE.BufferGeometry().setFromPoints( points );
const line_material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const line = new THREE.Line( line_geometry, line_material );
scene.add( line );

function animate() {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

