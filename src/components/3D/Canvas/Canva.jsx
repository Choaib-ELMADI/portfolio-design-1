import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Preload, useGLTF } from '@react-three/drei';

import Loader from '../Loader/Loader';
import { useStateContext } from '../../../StateContext/StateContext';
import './Canva.css';



const Model = () => {
  const model = useGLTF('./model/scene.gltf');
  const ref = useRef();
  const { isMobile } = useStateContext();

  useFrame(() => {
    if (!ref.current) {
      return;
    }
    ref.current.rotation.y += 0.05;
  });


  return (
    <mesh>
      {/* <hemisphereLight intensity={ .25 } groundColor={ selectedColor } /> */}
      <pointLight intensity={ 1 } />
      <primitive 
        ref={ ref }
        object={ model.scene }
        scale={ .04 }
        position={ isMobile ? [9, -2, 0] : [12, -1, 0] }
      />
    </mesh>
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