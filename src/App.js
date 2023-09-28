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
function App() {
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







      </Routes>
      </BrowserRouter>
  );
}

export default App;
