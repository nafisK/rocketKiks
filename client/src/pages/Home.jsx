import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

// primary: '#0268FF',
// secondary: '#44546A',

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
    </div>
  )
}

export default Home
