import './Moon.scss';

import MoonTexture from '../../assets/textures/moon/8k_moon.jpg';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { useRef } from 'react';

const Moon = (props) => {
  const [moonMap] = useLoader(TextureLoader, [MoonTexture]);

  const moonRef = useRef();

  useFrame((props) => {
    const elapsedTime = props.clock.getElapsedTime();
    moonRef.current.rotation.y = -elapsedTime / 40;

    // props.camera.rotation.y += 0.001;
  });

  const moonRadius = 0.2725;
  return (
    <mesh position={[3, 0, 1]} ref={moonRef}>
      <sphereGeometry args={[moonRadius, 32, 32]} />
      );
      <meshStandardMaterial map={moonMap} side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Moon;
