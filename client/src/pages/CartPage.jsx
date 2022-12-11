import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import CartTotal from '../components/CartTotal'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate()

  const [totalPrice, setTotalPrice] = React.useState(0)

  const SummaryItemStyle = 'SummaryItem flex justify-between mt-3 w-[100%]'
  const ProductDivStyle = 'flex w-[100%] h-auto items-center mobile:flex-col'
  const PriceQuantityStyle =
    'flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7'

  // handle continue shopping button
  const handleContinueShopping = () => {
    navigate('/')
  }

  const onToken = token => {
    // clear cart
    setCart([])
    // redirect to home page
    navigate('/')
  }

  return (
    <div>
      <Announce />
      <Navbar />
      <div className='p-3 max-w-[1240px] mx-auto'>
        <div className='flex justify-center text-5xl'>Cart</div>

        {/* upper buttons div */}
        <div className='flex items-center justify-between mt-4 mobile:flex-col'>
          <button
            className='btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] mt-0'
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
          <div className='flex underline text-lg hover:cursor-pointer mobile:m-5'>
            <p>Items in your Cart: {cart.length}</p>
            <p className='ml-5'>Wishlist Items: 0</p>
          </div>
          <div className='btn mt-0'>
            <StripeCheckout
              token={onToken}
              name='Rocket Kicks'
              amount={totalPrice * 100}
              currency='USD'
              allowRememberMe={true}
              stripeKey='pk_test_51LTB39DoJ4j7RRSuj1mCGcoh1X6vrmunCik8xu87NLasr6LDqArCW2U1kFwUquJUfm7NikFcjBp0mhu3MSgKH1wa00S2QSwGJZ'
            />{' '}
          </div>
          {/* Stripe Integration */}
        </div>

        {/* vertically center parent div */}
        <div className='flex flex-row mt-7 mobile:flex-col'>
          {/* product div */}
          <div className='flex flex-col flex-1'>
            {cart.map((item, index) => (
              <Cart item={item} key={index} />
            ))}
          </div>

          <div className='Summary flex-[0.4] flex flex-col items-center w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6'>
            <CartTotal cart={cart} setTotalPrice={setTotalPrice} />
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  )
}

export default CartPage
