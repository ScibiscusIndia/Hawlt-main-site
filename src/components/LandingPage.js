import React from 'react'
import './assests/css/styleLanding.css'

export const LandingPage = () => {
  return (
    <div className='Landingpage-main'>
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <ul className="list-head">
                <li><h1 className="display-6">We are making renting easy and <br/> afordable for everyone<br/></h1></li>
                <li>
                  <p className="lead">
                    We have a strong and trust conneections and network of the property holders who invites renters and our platform help users to host there properties. 
                  </p>
                </li>
                <li>
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </li>
              </ul> 
            </div>
            <div className="col">
            </div>
           </div>
          </div> 
      </div>
    </div>
  )
}


{/* <div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>  */}


//  <ul>
//           <li><h1 class="display-6">Display 6</h1></li>
//           <li>
//             <p class="lead">
//               This is a lead paragraph. It stands out from regular paragraphs.
//             </p>
//           </li>
//         </ul> 