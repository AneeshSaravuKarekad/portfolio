import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, Html } from '@react-three/drei';

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 1.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => (document.body.style.cursor = 'auto');
  }, [hovered]);
  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);
    ref.current.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'hsl(182, 96%, 40%)'),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

const SKILLS = [
  'Javascript',
  'TypeScript',
  'REST',
  'Bootstrap',
  'ES5/ES6',
  'Bootstrap',
  'Node JS',
  'React JS',
  'MongoDB',
  'SASS',
  'HTML5',
  'CSS3',
  'BEM',
  'TailwindCSS',
  'React Native',
  'Responsive Design',
  'Object Oriented',
  'Functional Programming',
  'Three JS',
  'React-Three-Fiber',
  'Semantic',
];

function randomWord(myArray) {
  var alreadyDone = [];

  if (alreadyDone.length === 0) {
    for (var i = 0; i < myArray.length; i++) alreadyDone.push(i);
  }

  var randomValueIndex = Math.floor(Math.random() * alreadyDone.length);

  var indexOfItemInMyArray = alreadyDone[randomValueIndex];

  alreadyDone.splice(randomValueIndex, 1);

  return myArray[indexOfItemInMyArray];
}

function Cloud({ count = 6, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    // Reference https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          randomWord(SKILLS),
        ]);
    return temp;
  }, [count, radius]);

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}
export default function SkillsCarousel() {
  return (
    <div
      style={{ position: 'relative', top: '-100px', width: 600, height: 600 }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#202025', 0, 80]} />
        <Cloud radius={22} />
        <OrbitControls enableDamping autoRotate enableZoom={false} />
      </Canvas>
    </div>
  );
}
