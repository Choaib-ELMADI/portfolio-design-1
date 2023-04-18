import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, useGLTF } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three'

import Loader from '../Loader/Loader';
import { useStateContext } from '../../../StateContext/StateContext';
import './Canva.css';



const Model = () => {
  const model = useGLTF('./model/scene.gltf');
  const ref = useRef()
  const { isMobile } = useStateContext();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8);
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
  });

  return (
    <animated.mesh ref={ ref }>
      <hemisphereLight intensity={ .25 } groundColor="black" />
      <pointLight intensity={ 1 } />
      <primitive 
        object={ model.scene }
        scale={ .04 }
        position={ isMobile ? [9, -2, 0] : [12, -1, 0] }
      />
    </animated.mesh>
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={ <Loader /> }>
        <Model />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

const Canva = () => {
  return (
    <div className='app__canvas'>
      <ModelCanvas />
    </div>
  );
};

export default Canva;