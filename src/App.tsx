import React from 'react';
import './App.css';
import Appbar from './Components/Appbar';
import HeroBanner from './Components/HeroBanner';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <>
    <Appbar/>
    <Navbar />
    <HeroBanner />
    </>
  );
}

export default App;
