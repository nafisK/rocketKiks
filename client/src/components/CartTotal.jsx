import { React, useEffect, useState } from 'react'

function CartTotal({ cart, setTotalPrice }) {
  const SummaryItemStyle = 'SummaryItem flex justify-between mt-3 w-[100%]'
  const [subTotal, setSubTotal] = useState(0)
  const [totalForComponent, setTotalForComponent] = useState(0)

  useEffect(() => {
    let tempSubTotal = 0
    cart.forEach(item => {
      tempSubTotal += item.price * item.quantity
    })
    setSubTotal(tempSubTotal)
    const tempTotal = tempSubTotal + 15 - 10
    setTotalPrice(tempTotal)
    setTotalForComponent(tempTotal)
    console.log(tempSubTotal)
    console.log()
  }, [])

  return (
    <>
      <h1 className='text-[2rem]'>SUMMARY</h1>
      <div className={SummaryItemStyle}>
        <p>SubTotal:</p>
        <p>${subTotal}</p>
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
        <p>${totalForComponent}</p>
      </div>
    </>
  )
}

export default CartTotal
