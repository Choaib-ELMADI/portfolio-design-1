import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, useGLTF } from '@react-three/drei';

import Loader from '../Loader/Loader';
import './Canva.css';

const Model = () => {
  const model = useGLTF('./model/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={ .2 } groundColor="black" />
      <pointLight intensity={ 1 } />
      <primitive 
        object={ model.scene }
        scale={ .04 }
        position={ [12, -2, 0] }
        rotation={ [.2, 0, 0] }
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