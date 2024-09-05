// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Hazard from './components/Hazard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Home/>
     <About/>
     <Hazard/>
     <Faq/>
    </div>
  );
}

export default App;
