import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Uxdesign from './components/pages/Ux-design';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='ux-design' element={<Uxdesign />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
