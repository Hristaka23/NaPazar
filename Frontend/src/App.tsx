import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Router, Route, Routes,Link  } from 'react-router-dom';
import ErorPage from "./pages/404";
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
