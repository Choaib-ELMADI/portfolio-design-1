import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Loader } from '../../index';
import './Canva.css';

const Model = () => {
  const model = useGLTF('./model/scene.gltf');

  return (
    <primitive
      object={ model.scene }
      scale={ 2.5 }
      position-y={ 0 }
      rotation-y={ 0 }
    />
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camear={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [0, 0, 0]
      }}
    >
      <Suspense fallback={ <Loader /> }>
        {/* <OrbitControls
          autoRotate
          enableZoom={ false }
          maxPolarAngle={ Math.PI / 2 }
          minPolarAngle={ Math.PI / 2 }
        /> */}
        <Model />
      </Suspense>

      {/* <Preload all /> */}
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