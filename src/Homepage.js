import './App.css';
import { Component3 } from './components/Component3';
import { Contactform } from './components/Contactform';
import { Footer } from './components/Footersection';
import { Hostprop } from './components/Hostprop';
import { LandingPage } from './components/LandingPage';
import { NavBar } from './components/NavBar';
import { Popularcity } from './components/Popularcity';
import { Seemore } from './components/Seemore';
import { Subpage } from './components/Subpage';
import { Travelmenu } from './components/Travelmenu';
import {useState, useEffect} from 'react';
import { Mobilecompo3 } from './mobile-view/Mobilecompo3';
import { Main } from './components/backend/Main';
import { Routes, Route } from 'react-router-dom';


function useWindowSize(){
  const[size, setSize] = useState(window.innerWidth);
  useEffect(()=>{
    const handleResize = () => {
      setSize(window.innerWidth)
    };
    window.addEventListener("resize", handleResize);
  },[]);
  return size;
}

function Homepage() {

  return (
    <div >      
      {/* My nav is here */}
      <div className='main-nav-app'><NavBar/></div>

      {/* My Landing sofa wallpaper */}
      <div><LandingPage/></div>
     
     {/* Popular cities in the list */}
      <center>
        <div className="main-app-prop-ci"><Popularcity/></div>
      </center>

      {/* All the property hosted is listed here total 6 here. */}
      <Component3/>

      {/* Seemore banner */}
      <Seemore/><br />

      {/* Travel guide with optioons like malls and beaches. */}
      <Travelmenu/><br />

      {/* Hosting property banner is here. */}
      <Hostprop/>

      {/* contacting form */}
      <Contactform/>

      {/* Footer section */}
      <Footer/>

    </div>
  );
}

export default Homepage;
