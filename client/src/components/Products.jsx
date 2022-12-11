import React from 'react'
import { TopProductApi } from '../api/TopProductApi'
import Product from './Product'
import axios from 'axios'

const Products = ({ setCart }) => {
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get('http://localhost:4000/products')
      setProducts(res.data)
    }
    getProducts()
  }, [])

  return (
    <div className='max-w-[1240px] mx-auto'>
      <div className='p-5 flex flex-wrap'>
        {products.map((product, index) => (
          <Product product={product} key={index} setCart={setCart} />
        ))}
      </div>
    </div>
  )
}

export default Products
