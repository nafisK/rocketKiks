import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'

const Navbar = () => {
  const style =
    'text-[14px] cursor-pointer ml-[25px] mobile:ml-[5px] text-[#44546A]'

  const handleRegister = () => {
    console.log('Register')
  }

  const handleSignIn = () => {
    console.log('Sign In')
  }

  return (
    <div className='navbar h-[60px] shadow-md relative z-10 '>
      <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0'>
        <div className=' left flex flex-1  items-center'>
          {/* Search Input */}
          <div className='SearchContainer flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]'>
            <input
              type='text'
              className='border-none mobile:w-[50px]'
              placeholder='Search'
            />
            <SearchIcon
              className='text-[#44546A]'
              style={{ fontSize: '16px' }}
            />
          </div>
        </div>

        {/* Logo */}
        <div className='center flex-1 text-center  mobile:ml-6'>
          <div className='logo font-bold mobile:text-sm text-[#0268FF]'>
            ROCKET KIKS.
          </div>
        </div>

        {/* Right Side */}
        <div className='right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]'>
          <div className={style} onClick={handleRegister}>
            Register
          </div>
          <div className={style} onClick={handleSignIn}>
            Sign In
          </div>
          <div className={style}>
            <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
