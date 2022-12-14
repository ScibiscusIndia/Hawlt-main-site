import './App.css';
// import { Component3 } from './components/Component3';
// import { Contactform } from './components/Contactform';
// import { Footer } from './components/Footersection';
// import { Hostprop } from './components/Hostprop';
// import { LandingPage } from './components/LandingPage';
// import { NavBar } from './components/NavBar';
// import { Popularcity } from './components/Popularcity';
// import { Seemore } from './components/Seemore';
import { Subpage } from './components/Subpage';
// import { Travelmenu } from './components/Travelmenu';
// import {useState, useEffect} from 'react';
// import { Mobilecompo3 } from './mobile-view/Mobilecompo3';
// import { Main } from './components/backend/Main';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import { Allproperty } from './components/Allproperty';
import { Userpro } from './components/users/Userpro';
import { Checkout } from './components/checkout/Checkout';
import { Guest } from './components/users/Guest';
// import { Garbage } from './components/Garbage';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/propDetails' element={<Subpage/>} />
        <Route path='/AllpropMenu' element={<Allproperty/>} />
        <Route path='/UserProfile' element={<Userpro/>} />
        <Route path='/UserCheckout89Property' element={<Checkout/>} />
        <Route path='/GuestRoute98page' element={<Guest/>} />
      </Routes>
    </div>
  );
}

export default App;
