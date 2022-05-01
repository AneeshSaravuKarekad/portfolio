import './Hero.scss';

import Earth from '../../components/Earth/Earth';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Hero = () => {
  return (
    <div className="hero__container">
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero;
