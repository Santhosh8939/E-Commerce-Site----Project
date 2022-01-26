import React, {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/home';
import ShopPage from './pages/shop';
import SingleProduct from './pages/single-product';
import CartPage from './pages/cart';
import CheckoutPage from './pages/checkout';

import "./css/bootstrap.min.css";
import "./css/font-awesome.min.css";
import "./css/style.css";
import "./css/responsive.css";

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/shop" element={<ShopPage/>}></Route>
          <Route path="/product" element={<SingleProduct/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;