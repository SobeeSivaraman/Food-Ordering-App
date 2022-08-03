import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "font-awesome/css/font-awesome.css";
import{CartProvider} from "react-use-cart";
import Home from "./Pages/Home";
import Menu from './Pages/Menu';
import Cart from "./Pages/Cart"
import ContactUs from './Pages/ContactUs';
import Orders from './Pages/Orders';
import {useEffect, useState} from 'react';



export default function App(){
  return (
    <Router>
      <Navbar/>
      <CartProvider>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Menu" exact element={<Menu/>}/>
          <Route path="/Cart" exact element={<Cart  totalItems/>}/>
        <Route path="/ContactUs" exact element={<ContactUs/>}/>
        <Route path="/Orders" exact element={<Orders/>}/>
      </Routes>
       </CartProvider>
      <Footer/>
      </Router>
  );
}