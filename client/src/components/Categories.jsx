import React from 'react'
import { CategoryApi } from '../api/CategoryApi'
import Category from './Category'

const Categories = () => {
  return (
    <div className='flex justify-between items-center p-5 mobile:flex-col'>
      {CategoryApi.map((category, index) => (
        <Category item={category} key={index} />
      ))}
    </div>
  )
}

export default Categories
