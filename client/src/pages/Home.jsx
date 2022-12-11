import { React, useState } from 'react'
import Announce from '../components/Announce'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'

// primary: '#0268FF',
// secondary: '#44546A',

function Home({ setCart }) {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products setCart={setCart} />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
