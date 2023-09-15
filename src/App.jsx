import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Navbar from './components/header/navbar';
import Contact from './components/pages/Contact';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/experience' element={<Experience/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
