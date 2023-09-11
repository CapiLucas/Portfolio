import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/experience' element={<Experience/>} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
