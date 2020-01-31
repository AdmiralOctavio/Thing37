//creates the scene
var scene = new THREE.Scene();
scene.background = new THREE.Color("#0e012a");

var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
//Does lighting stuff I dont remember how to do
var a = new THREE.Vector3(0, 0, -1);
var light = new THREE.HemisphereLight(0x330e82, 0x330e82, 10);
scene.add(light);
// renders the scene
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var loader = new THREE.GLTFLoader();
var loader = new THREE.GLTFLoader();
loader.load(
    "fighter-jet/fighterjet.glb",
    function (gltf) {
        gltf.scene.name = "boomer";
        scene.add(gltf.scene);
    },
    undefined,
    function (error) {
        console.error(error);
    }
);
var animate = function () {
    requestAnimationFrame(animate)
    scene.getObjectByName("boomer").position.y = 0
    renderer.render(scene, camera)
}
animate()