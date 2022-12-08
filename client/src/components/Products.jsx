import React from 'react'
import { TopProductApi } from '../api/TopProductApi'
import Product from './Product'

const Products = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
      <div className='p-5 flex flex-wrap'>
        {TopProductApi.map((product, index) => (
          <Product item={product} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Products
