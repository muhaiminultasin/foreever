import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product';
import Orders from './pages/Orders';
import Collection from './pages/Collection';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <>
      <div className='px-[20px] md:px-[5vw] lg:px-[7vw]'>
      <Navbar/>
      <SearchBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/place-order' element={<PlaceOrder/>}/>
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
      <Footer/>
    </>
  )
}

export default App;
