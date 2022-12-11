import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import React, { useState } from 'react'
import ProductPage from '../pages/ProductPage'
import { useNavigate } from 'react-router-dom'

const Product = ({ product, setCart }) => {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState('red')
  const [size, setSize] = useState('M')

  const [hoverEffects, setHoverEffects] = useState(' opacity-0')

  const iconStyle =
    'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 hover:bg-[#0268FF] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'

  function handleHoverEnter() {
    setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
  }

  function handleHoverExit() {
    setHoverEffects(' opacity-0')
  }

  function handleClick() {
    navigate(`/product/${product.styleID}`)
  }

  // handle add to cart button and add id, name, color, size, quantity, price, image to setCart
  const handleAddToCart = () => {
    console.log(product)
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
    <div
      className='flex items-center justify-center flex-1 min-w-[280px] min-h-[350px] m-2 overflow-hidden rounded-md shadow-lg relative'
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={product.thumbnail} alt='product' />
      <div
        className={
          `flex items-center justify-center absolute w-[100%] h-[100%] ease-in duration-100` +
          hoverEffects
        }
      >
        <div className={iconStyle} onClick onClick={handleAddToCart}>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className={iconStyle}>
          <FavoriteBorderIcon />
        </div>
        <div className={iconStyle} onClick={handleClick}>
          <SearchOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Product
