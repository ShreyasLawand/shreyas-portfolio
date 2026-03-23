import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                
                if (mesh.material) {
                  const nameLower = mesh.name.toLowerCase();
                  
                  const newMat = (mesh.material as THREE.Material).clone() as THREE.MeshStandardMaterial;
                  let changed = false;

                  if (nameLower.includes("shirt") || nameLower.includes("body") || mesh.name === "BODY.SHIRT") {
                    newMat.color = new THREE.Color("#ff0033"); // vibrant bright red
                    changed = true;
                  } else if (nameLower.includes("pant")) {
                    newMat.color = new THREE.Color("#ffffff");
                    changed = true;
                  } else if (nameLower.includes("shoe") || nameLower.includes("sneaker") || nameLower.includes("footwear")) {
                    newMat.color = new THREE.Color("#ffffff");
                    changed = true;
                  } else if (nameLower.includes("cap") || nameLower.includes("hat") || nameLower.includes("headwear")) {
                    newMat.color = new THREE.Color("#ffffff");
                    changed = true;
                  }
                  
                  if (changed) {
                    mesh.material = newMat;
                  }
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            
            const footR = character.getObjectByName("footR");
            const footL = character.getObjectByName("footL");
            if (footR) footR.position.y = 3.36;
            if (footL) footL.position.y = 3.36;

            // Monitor scale is handled by GsapScroll.ts animations

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
