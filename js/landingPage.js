import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function setCanvasSize() {
	renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = (window.innerWidth / window.innerHeight)
    camera.updateProjectionMatrix()
	console.log("Updated")
}

// #region Lighting Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
setCanvasSize()

document.body.appendChild(renderer.domElement);

// Add lights to the scene
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(10, 10, 20).normalize();
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 5, 1);
pointLight.position.set(10, 10, 20); // Set the position of the light
scene.add(pointLight);

// #endregion

let mixer;

const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

let cat;
let forest;

//Cat Loading
loader.load(
    // resource URL
    'resources/models/Cat/scene.gltf',
    // called when the resource is loaded
    function (gltf) {
        cat = gltf.scene; // Assign to the global variable

        mixer = new THREE.AnimationMixer(gltf.scene);

        const action = mixer.clipAction(gltf.animations[0]);
        action.play();
        
        const scaleVal = .005

        gltf.scene.scale.set(scaleVal * gltf.scene.scale.x, scaleVal * gltf.scene.scale.y, scaleVal * gltf.scene.scale.z)

		// Cat Positioning
		cat.rotation.y = -1

        scene.add(gltf.scene);
    },
    (error) => {
        console.log(error);
    }
);

//Forest Loading
loader.load(
    // resource URL
    'resources/models/forest/scene.gltf',
    // called when the resource is loaded
    function (gltf) {
        forest = gltf.scene; // Assign to the global variable
        forest.position.x = .08
        forest.rotation.y = 5
        scene.add(gltf.scene);
    },
    (error) => {
        console.log(error);
    }
);

// Camera Positioning
camera.position.z = 8;
camera.position.y = 4;
camera.position.x = -4
camera.rotateX(-.5)


//Background Texture
const bgTexture = textureLoader.load("resources/imgs/bg.jpg")
bgTexture.colorSpace = THREE.SRGBColorSpace;

scene.background = bgTexture;

// Clock for three.js
const clock = new THREE.Clock();

let walkDirection = "forward";
let dontWalk = false;
let countTime = false;
let counter = 0;



function animate() {
	const delta = clock.getDelta(); // Get the time elapsed since the last frame
    if ((mixer) && (!dontWalk)) {
        mixer.update(delta); // Update the animation mixer
    }

    if (countTime) {
        dontWalk = true;
        counter += delta;
    }
        //console.log(counter);

    if(dontWalk) {
        if ((walkDirection == "forward") && (cat.rotation.y < 2)){ // 2 = the finished rotation
            cat.rotation.y += .05;
        } else if((walkDirection == "backward") && (cat.rotation.y > -1)){ // -1 = the finished rotation
            cat.rotation.y -= .05;
        }
    }

    if (counter >= 3) {
        console.log("Moving other")
        dontWalk = false
        countTime = false;
        counter = 0;
        
        if(walkDirection == "forward"){
            walkDirection = "backward"
        } else {
            walkDirection = "forward"
        }
        
        
    }

    if (cat) {
        if (cat.position.x < -3.75) {
            countTime = true;
            cat.position.x = -3.7499;
            cat.position.z = 3.7499;
            
        } else if (cat.position.x > 0){
            countTime = true;
            cat.position.x = 0;
            cat.position.z = 0;
        }

        if ((walkDirection == "forward")  && (!dontWalk)) {
            cat.position.x -= .01;
            cat.position.z += .01;
        } else if ((walkDirection == "backward") && (!dontWalk)) {
            cat.position.x += .01;
            cat.position.z -= .01;
        }
    }

    //if(forest) {forest.rotation.y += .002}
    

  	renderer.render(scene, camera);
  
	
}

renderer.setAnimationLoop(animate);

window.addEventListener("resize", setCanvasSize);