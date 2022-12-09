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

function App() {
  const widthVarSize = useWindowSize(); 
  console.log(widthVarSize);
  return (
    <div >
      
      <div className='main-nav-app'><NavBar/></div>
      <div><LandingPage/></div>
     
     <center>
     <div className="main-app-prop-ci"><Popularcity/></div>
    </center>
     {/* {widthVarSize < 800 ?  <div><Mobilecompo3/><Mobilecompo3/><Mobilecompo3/><Mobilecompo3/></div>  : <Component3/> } */}

    <Component3/>

    <Seemore/><br />

     <Travelmenu/><br />
     <Hostprop/>
     <Contactform/>
     <Footer/>
     {/* <Subpage/> */}
    </div>
  );
}

export default App;
