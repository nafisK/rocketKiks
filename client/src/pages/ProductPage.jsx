import React from 'react'
import Announce from '../components/Announce'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Counter from '../components/Counter'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductPage = ({ setCart }) => {
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('red')
  const [size, setSize] = useState('M')

  useEffect(() => {
    const productId = window.location.pathname.split('/')[2]
    const getProduct = async () => {
      const res = await axios.get(`http://localhost:4000/product/${productId}`)
      setProduct(res.data)
    }
    getProduct()
    console.log(product)
  }, [])

  // handle add to cart button and add id, name, color, size, quantity, price, image to setCart
  const handleAddToCart = () => {
    setCart(prev => [
      ...prev,
      {
        id: product.styleID,
        name: product.shoeName,
        color: color,
        size: size,
        quantity: quantity,
        price: product.retailPrice,
        image: product.thumbnail,
      },
    ])
  }

  return (
    <div>
      <Announce />
      <Navbar />
      <div className='flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3'>
        <div className='flex-1 flex items-center justify-center'>
          <img
            src={product?.thumbnail}
            className='product_img'
            alt='product_image'
          />
        </div>
        <div className='flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center'>
          <h1 className='title text-[40px] mobile:text-[30px]'>
            {product?.shoeName}
          </h1>
          <p className='disription pr-[4rem] text-justify mt-4 mobile:pr-0'>
            {product?.description}
          </p>
          <div className='flex flex-col place-self-start'>
            <p className='mt-7 text-3xl'>
              Price: $<b>{product?.retailPrice || '119.99'}</b>
            </p>

            <div className='colors flex mt-7 text-2xl'>
              Colors
              <div className='colorSelect bg-red-600 '></div>
              <div className='colorSelect bg-blue-600 '></div>
              <div className='colorSelect bg-yellow-400 '></div>
            </div>

            <div className='mt-7 text-2xl'>
              Size
              <select className='border-[2px] border-silver rounded-md ml-5'>
                <option defaultValue>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
            <div className='mt-7'>
              <Counter quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>

          <button
            className='text-white bg-[#0268FF] rounded-md shadow-md mt-[30px] p-3'
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ProductPage
