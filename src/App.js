import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import ContactUs from './pages/ContactUs';
import Benefit from './pages/Benefit';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/benefit" element={<Benefit />} />
      </Routes>
    </>
  );
}

export default App;
