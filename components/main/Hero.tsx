import React from 'react'
import HeroContent from '../sub/HeroContent'


const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
       <video
       autoPlay
       muted
       loop
       className='rotate-180 absolute top-[-220] w-full h-full left-0 z-[1] opacity-65  object-cover'>
        <source src="/blackhole.webm" type="video/webm" />
       </video>
       <HeroContent />
    </div>
  )
}

export default Hero