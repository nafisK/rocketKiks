import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

const NewsLetter = () => {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-[#0268FF]'>
      <h1 className='text-[50px] text-white font-bold'>NEWSLETTER</h1>
      <h2 className='text-[20px] text-white mt-2 mobile:text-center mobile:p-3'>
        Get monthly emails about Rocket Kiks deals and benefits!
      </h2>
      <div className='flex mt-[1rem] item-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden mobile:min-w-[20rem]'>
        <input
          className='border-none pl-[20px] flex-[8]'
          type='email'
          placeholder='Email'
        />
        <button className='bg-[#44546A] flex-1'>
          <SendOutlinedIcon className='text-white' />
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
