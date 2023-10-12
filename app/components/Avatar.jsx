import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import {useAnimations} from "@react-three/drei";
import CanvasLoader from "./Loader";

const Avatar = ({ isMobile }) => {
  const avatar = useGLTF("./desktop_pc/avatar.glb");
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);
	useEffect(() => {
		actions.Waving.play();
	},[]);
  return (
    <group>
      <hemisphereLight intensity={0.45} groundColor='black' />
      <primitive
        object={avatar.scene}
        scale={[4, 4, 4]}
        position={isMobile ? [0, -3, 0] : [0, -3.95, 0]}
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