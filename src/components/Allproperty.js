import React from 'react'
import { Footer } from './Footersection'
import { NavBar } from './NavBar'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Propertycard } from './cards/Propertycard'

export const Allproperty = () => {
    //calling the data api.
  const [ propDet, setPropData ] = useState([]);
  const [load, setLoad] = useState(false)

    useEffect(()=>{
        const fetchPromise = fetch("/properties_menu");
        fetchPromise.then(response => {
            return response.json();
            }).then(e => {
                setPropData(e);
                setLoad(true)
        })
    },[]);

  return (
    <div >
        <NavBar/>
        
        <br />
        <div className='heading-compo3 container'>
            <p class="h1"><strong>Our premium #Stays <br /> for you😎</strong></p>
        </div><br />

        {/* search bar */}
        <div class="container heading-compo3 text-center">
            <div class="row">
                <div class="col">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
                <div class="col">
                    {/* can put your here data */}
                </div>
            </div>
        </div>
        <br />
        <hr class="container " />
        <br />



        {/* LOADING SECTION */}

        <center>
        <div className='loader-allproperty'>
            {
                load ? null : 
                <>
                <h3>Loading...</h3>
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </>
            }
        </div>
        </center>




            <div class="container text-center">
                <div class="row">
                     {Object.entries(propDet).map(([key, value]) => {
                        return (
                            <div className="col" >
                                {
                                    propDet == null ?
                                    <Propertycard/>
                                    :
                                    <Link
                                        to = '/propDetails' state={{from : propDet[key]}}>
                                        <Propertycard prop1 = {propDet[key]}/>
                                    </Link>
                                }
                          
                            </div>
                        )
                    })}
               </div>
            </div>

        <Footer/>
    </div>
  )
}


//  {Object.entries(propDet).map(([key, value]) => {
//             return (
//                 <div className='all-block-a' >
//                     {
//                 propDet == null ?
//                 <Propertycard/>
//                 :
//                 <Link 
//                     to = '/propDetails' state={{from : propDet[key]}}>
//                     <Propertycard prop1 = {propDet[key]}/>
//                 </Link>
//                 }
//                 </div>
//             )
//         })}
