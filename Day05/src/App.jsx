import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import React from 'react';
import Login from './components/login';
import Signup from './components/signup';
import Home from './components/Home';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Event from './components/event';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/navbar" element={<Navbar/>}></Route>
          <Route path="/footer" element={<Footer/>}></Route>
          <Route path="/event" element={<Event/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}




export default App
