import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Books from './components/Books';
import About from './components/About';
import Login from './components/Login';
import Register from './pages/Register';
import Cart from './components/Cart';
import Search from './components/Search';

import {jsx as _jsx} from 'react/jsx-runtime';


function App() {
  // //Step 1 :
  // const { productItems } = Data
  // const { shopItems } = Sdata

  // //Step 2 :
  // const [CartItem, setCartItem] = useState([])

  // //Step 4 :
  // const addToCart = (product) => {
  //   // if hamro product alredy cart xa bhane  find garna help garxa
  //   const productExit = CartItem.find((item) => item.id === product.id)
  //   // if productExit chai alredy exit in cart then will run fun() => setCartItem
  //   // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
  //   // gayara check garxa if item.id ra product.id chai match bhayo bhane
  //   // productExit product chai display garxa
  //   // ani increase  exits product QTY by 1
  //   // if item and product doesnt match then will add new items
  //   if (productExit) {
  //     setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
  //   } else {
  //     // but if the product doesnt exit in the cart that mean if card is empty
  //     // then new product is added in cart  and its qty is initalize to 1
  //     setCartItem([...CartItem, { ...product, qty: 1 }])
  //   }
  // }

  // // Stpe: 6
  // const decreaseQty = (product) => {
  //   // if hamro product alredy cart xa bhane  find garna help garxa
  //   const productExit = CartItem.find((item) => item.id === product.id)

  //   // if product is exit and its qty is 1 then we will run a fun  setCartItem
  //   // inside  setCartItem we will run filter to check if item.id is match to product.id
  //   // if the item.id is doesnt match to product.id then that items are display in cart
  //   // else
  //   if (productExit.qty === 1) {
  //     setCartItem(CartItem.filter((item) => item.id !== product.id))
  //   } else {
  //     // if product is exit and qty  of that produt is not equal to 1
  //     // then will run function call setCartItem
  //     // inside setCartItem we will run map method
  //     // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
  //     setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
  //   }
  // }

  return (
   
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<Home />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/nav" element={<Navbar />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/book" element={<Books />}/>
      {/* <Route path='logo' element={<Logo />}/> */}
      <Route path='about' element={<About />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/search" element={<Search />}/>

      









      </Routes>
      </BrowserRouter>
  );
}

export default App;
