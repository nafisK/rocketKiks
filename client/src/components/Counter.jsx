import React from 'react'

function Counter({ quantity, setQuantity }) {
  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div>
      <div className='counter flex items-center text-2xl justify-start'>
        Quantity
        <div className='ml-5 shadow-md flex'>
          <div
            className='bg-[#0268FF] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer'
            onClick={decrementQuantity}
          >
            -
          </div>
          <div className='w-8 flex items-center justify-center border-[1px] border-[#0268FF]'>
            {quantity}
          </div>
          <div
            className='bg-[#0268FF] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer'
            onClick={incrementQuantity}
          >
            +
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter
