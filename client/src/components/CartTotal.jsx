import React from 'react'

function CartTotal({ cart, setTotalPrice }) {
  const SummaryItemStyle = 'SummaryItem flex justify-between mt-3 w-[100%]'

  // calculate total price from items in cart
  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price
  }, 0)
  console.log(totalPrice)

  setTotalPrice(totalPrice + 15 - 10)

  return (
    <>
      <h1 className='text-[2rem]'>SUMMARY</h1>
      <div className={SummaryItemStyle}>
        <p>SubTotal:</p>
        <p>${totalPrice}</p>
      </div>
      <div className={SummaryItemStyle}>
        <p>Fixed Shipping Cost:</p>
        <p>$15</p>
      </div>
      <div className={SummaryItemStyle}>
        <p>First time discount:</p>
        <p>-$10</p>
      </div>
      <div className={SummaryItemStyle + ' text-3xl font-bold'}>
        <p>Total:</p>
        <p>${totalPrice}</p>
      </div>
    </>
  )
}

export default CartTotal
