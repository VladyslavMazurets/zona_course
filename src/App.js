import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <p className="h-screen bg-black text-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ad odit
        deleniti consectetur amet quod magni omnis possimus aperiam sint fuga,
        illum consequatur, eius cupiditate.
      </p>
      <p className="h-screen">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ad odit
        deleniti consectetur amet quod magni omnis possimus aperiam sint fuga,
        illum consequatur, eius cupiditate.
      </p>
      <p className="h-screen">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ad odit
        deleniti consectetur amet quod magni omnis possimus aperiam sint fuga,
        illum consequatur, eius cupiditate.
      </p>
      <p className="h-screen">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ad odit
        deleniti consectetur amet quod magni omnis possimus aperiam sint fuga,
        illum consequatur, eius cupiditate.
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
