import React from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className='App gradient_bg'>
      <Navbar />
      <Hero />
    </div>
  );
}


export default App;
