import './Earth.scss';

import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

import EarthDayMap from '../../assets/textures/earth/8k_earth_daymap.jpg';
import EarthNormalMap from '../../assets/textures/earth/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/earth/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/earth/8k_earth_clouds.jpg';
import { useRef } from 'react';

const Earth = (props) => {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  const earthRadius = 1;

  const { height, width } = useThree((state) => state.viewport);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 30;
    cloudsRef.current.rotation.y = elapsedTime / 35;
  });

  return (
    <>
      <mesh ref={cloudsRef} position={[-width / 14, -0.25, 3]}>
        <sphereGeometry args={[earthRadius * 1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={earthRef} position={[-width / 14, -0.25, 3]}>
        <sphereGeometry args={[earthRadius, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
};

export default Earth;
