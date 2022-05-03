import './Hero.scss';

import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Stars } from '@react-three/drei';

import Earth from '../../components/Earth/Earth';
import Moon from '../../components/Moon/Moon';
import HeroContent from '../../components/HeroContent/HeroContent';

const Hero = () => {
  const group1 = useRef();

  return (
    <>
      <HeroContent />

      <div className="hero__container">
        <Canvas camera={{ fov: 50, position: [0, 0, 6] }}>
          <Suspense fallback={null}>
            <pointLight
              color={'#f6f3ea'}
              position={[2, 0, 6]}
              intensity={1.2}
            />

            <Stars
              radius={300}
              depth={60}
              factor={7}
              saturation={0}
              fade={true}
            />

            <group ref={group1}>
              <Earth />
              <Moon />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default Hero;
