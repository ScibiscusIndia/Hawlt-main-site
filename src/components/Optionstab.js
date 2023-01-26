import React from 'react'
import { Link } from 'react-router-dom'

export const Optionstab = () => {
  return (
    <div>        
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{textAlign:'center'}}>
          <div class="container-fluid">    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
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

        </div>
  )
}
