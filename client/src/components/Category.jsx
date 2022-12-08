import React from 'react'

const Category = ({ item }) => {
  console.log(item)
  return (
    <div className='flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
      <img src={item.src} className='w-[100%]' alt='category_img' />
      <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
        <buttton className='btn'>{item.title}</buttton>
      </div>
    </div>
  )
}

export default Category
