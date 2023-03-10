import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react';



export const Optionstab = () => {
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

  const myWidth = useWindowSize();
  console.log(myWidth);

  return (
    <div>    
      <br />   
      {
      (myWidth > 500) 
      ?
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z"/></svg>
                <Link to='/AllpropMenu' class="nav-link active" >Home</Link>
              </li> 
              <li class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14.656l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708v6.948zM12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z"/></svg>
                <Link to='/tabtwo-position3in' class="nav-link active">Offers</Link>
              </li> 
              <li class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zm8.018-3.685L8.659 11.34a2.25 2.25 0 0 1 3.182-3.182l.177.177.177-.177a2.25 2.25 0 0 1 3.182 3.182l-3.36 3.359z"/></svg>
                <Link to='/' class="nav-link active" >Private rooms</Link>
              </li> 
              <li class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 9a1 1 0 0 1 1 1 6.97 6.97 0 0 1 4.33 1.5h2.17c1.333 0 2.53.58 3.354 1.5H19a5 5 0 0 1 4.516 2.851C21.151 18.972 17.322 21 13 21c-2.79 0-5.15-.603-7.06-1.658A.998.998 0 0 1 5 20H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3zm1.001 3L6 17.022l.045.032C7.84 18.314 10.178 19 13 19c3.004 0 5.799-1.156 7.835-3.13l.133-.133-.12-.1a2.994 2.994 0 0 0-1.643-.63L19 15h-2.111c.072.322.111.656.111 1v1H8v-2l6.79-.001-.034-.078a2.501 2.501 0 0 0-2.092-1.416L12.5 13.5H9.57A4.985 4.985 0 0 0 6.002 12zM4 11H3v7h1v-7zm14-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-7-5a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
                <Link to='/AllpropMenu' class="nav-link active">Budget</Link>
              </li>
              <li class="nav-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 6h3v2h-1v11h1v2H1v-2h1V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2zm0 2H4v11h3v-7h2v7h2v-7h2v7h2v-7h2v7h3V8zM6 5v1h12V5H6z"/></svg>
                <Link to='/AllpropMenu' class="nav-link active">Mansions</Link>
              </li>         
        </ul>
        :
        <nav class="navbar navbar-expand-lg justify-content-center bg-body-tertiary tab-list-90">
          <div class="container-fluid">    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent" >
              <ul class="nav justify-content-center" >
              <li class="nav-item">
                <Link to='/AllpropMenu' class="nav-link active" >Home</Link>
              </li> 
              <li class="nav-item">
                <Link to='/AllpropMenu' class="nav-link active">Offers</Link>
              </li> 
              <li class="nav-item">
                <Link to='/' class="nav-link active" >Private rooms</Link>
              </li> 
              <li class="nav-item">
                <Link to='/AllpropMenu' class="nav-link active">Budget</Link>
              </li>
              <li class="nav-item">
                <Link to='/AllpropMenu' class="nav-link active">Mansions</Link>
              </li>         
              </ul>
            </div>
          </div>
        </nav>

      
      } 
        <br />

        {/* mobile view */}

      

        </div>
  )
}
