import React from 'react'
import Hero from './hero/Hero'
import Service from './service/Service'
import Collection from './collection/Collection'
import DualSection from '../dualsection/DualSection'
import Range from './range/Range'
import Works from '../works/Works'
import InputSection from './inputsection/InputSection'

const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <Service/>
        <Collection/>
        <DualSection/>
        <Range/>
        <Works/>
        <InputSection/>
      
    </div>
  )
}

export default Home
