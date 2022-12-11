import React from 'react'
import Counter from './Counter'

function Cart({ item }) {
  const ProductDivStyle = 'flex w-[100%] h-auto items-center mobile:flex-col'

  return (
    <div>
      {/* 1st product div */}
      <div className={ProductDivStyle}>
        <div className=' product flex pl-5 self-start'>
          <img className=' w-[200px]' src={item.image} alt='product_img' />

          <div className='disc flex items-start h-auto flex-col ml-6'>
            <p>
              <b className='mr-2'>ID:</b>
              {item.id}
            </p>
            <p>
              <b className='mr-2'>Product:</b>
              {item.name}
            </p>
            <div className='flex items-center justify-center'>
              <b className='mr-2'>Color:</b>
              <p className=''>{item.color}</p>
            </div>
            <p>
              <b className='mr-2'>Size:</b>
              {item.size}
            </p>
            <p>
              <b className='mr-2'>Price:</b>
              <b>${item.price}</b>
            </p>
          </div>
        </div>
      </div>
      <hr className='my-7 mobile:mt-0 mr-50' />
    </div>
  )
}

export default Cart
