import React from 'react'
import { Searchbar } from './Searchbar'
import { Link } from 'react-router-dom'
import './style-main.css'
import { useAuth0 } from "@auth0/auth0-react";

export const Landingheading = () => {
      const { loginWithRedirect } = useAuth0(); // for login
  const { logout } = useAuth0(); // for log out
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
        <div className='add_banner'>
            <p>
                Flat 15% OFF on every booking. 
            </p>
        </div>
        <center>
            <h1 className="main_heading_line">We simplifies your hunting of Stays.</h1>
        </center>
        <div class="container text-center rack_01">
            <div class="row">
                <div class="col">
                    <p class="h3">HAWLT</p>
                </div>
                <div class="col">
                    <Searchbar/>
                </div>
                <div class="col">
                    {/* user logo grid one */}
                        <div class="container text-center" id='user_logo_head_90'>
                            <div class="row">
                                <div class="col">GUEST
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" fill="rgba(0,0,0,0.77)"/></svg>
                                </div>
                                <div className='col'>
                                   {
                                    isAuthenticated ?
                                    
                                        <button type="button" onClick={() => logout({ returnTo: window.location.origin })} class="btn btn-dark">Log out</button>
                                    
                                    :
                                    <li className="nav-item">
                                        <button type="button" onClick={() => loginWithRedirect()} class="btn btn-dark">Join in</button>
                                     </li>         
                                    }
                                </div>
                            </div>
                        </div>
                    {/* /user logo grid end here */}
                           </div>
            </div>
        </div>
    </div>
  )
}
