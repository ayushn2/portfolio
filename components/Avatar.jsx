import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import {useAnimations} from "@react-three/drei";
import CanvasLoader from "./Loader";
import { useRef } from "react";

const Avatar = ({ isMobile }) => {
  const [play,setPlay] = useState(0)
  const avatar = useGLTF("./desktop_pc/avatar.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
  
	useEffect(() => {
		actions.Waving.play();
    
	},[]);
  // const hasEffectRun = useRef(false);
  // useEffect(() => {
  //   if (!hasEffectRun.current) {
  //     actions.Waving.play();
  //     hasEffectRun.current = true;
  //   }
  // }, [actions.Waving]);
  return (
    <group>
      <hemisphereLight intensity={0.45} groundColor='black' />
      <directionalLight
        intensity={0.6} // Adjust intensity as needed
        position={[5, 0, 5]} // Adjust position to focus on the avatar
        castShadow // Enable shadow casting
        shadow-mapSize-width={1024} // Shadow map size
        shadow-mapSize-height={1024}
        shadow-camera-far={50} // Shadow camera settings
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <primitive
        object={avatar.scene}
        scale={innerWidth<innerHeight?[4, 4, 4]:[4.5,4.5,4.5]}
        position={innerWidth<innerHeight ? [0, -3, 0] : [0.6, -4.35, 0]}
        rotation={[0,1.25,0]}
/>

    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {

  //   const mediaQuery = window.matchMedia("(max-width: 500px)");


  //   setIsMobile(mediaQuery.matches);

  //   const handleMediaQueryChange = (event) => {
  //     setIsMobile(event.matches);
  //   };


  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

   
  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}

      style={{ height: '600px',width:"400px" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          enabled={false}
/>
        <Avatar isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;