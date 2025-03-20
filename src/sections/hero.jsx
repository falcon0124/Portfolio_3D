import React from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import { Leva } from 'leva';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  return (
    <section className='min-h-screen border-2 border-blue-500 w-full flex flex-col relative'>

      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Sangam <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className='w-full h-full absolute inset-0'>
        <Canvas className='w-full h-full'>
          <PerspectiveCamera makeDefault position={[0,0,30]}/>
        </Canvas>
      </div>

    </section>
  )
}

export default Hero;
