import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom'
import { useState } from 'react'

import CategoryPage from './pages/CategoryPage'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Cart from './pages/CartPage'

function App() {

  const [cart, setCart] = useState([])
  // cart: id, name, color, size, quantity, price, image

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home cart={cart} setCart={setCart}/>} />
          <Route path='/category/' element={<CategoryPage />} />
          <Route path='/product/:id' element={<ProductPage cart={cart} setCart={setCart}/>} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
