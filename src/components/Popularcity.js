import React from 'react'
import { Popularcitycard } from './cards/Popularcitycard'
import './style-main.css'

export const Popularcity = () => {
  const mainSite = [
    {
      'name' : 'HSR Layout',
      'stay' : 3,
      'imgt' : '',
    },
    {
      'name' : 'Malleshwaram',
      'stay' : 2,
      'imgt' : '',
    },
    {
      'name' : 'Marathalli',
      'stay' : 4,
      'imgt' : '',
    },
    {
      'name' : 'Hosur Road',
      'stay' : 8,
      'imgt' : '',
    }
  ]
  return (
    <div>

      <br />
      <div className='popular-tag'>
        <h6>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="rgba(0,0,0,0.81)"/></svg>
          Popular cities</h6>
          <br />
      </div>

      <div className="scroll-city">
        <div class="container ">
         <div class="row">
           <div class="col">
             <Popularcitycard city={mainSite[0]} />
           </div>
           <div class="col">
             <Popularcitycard city={mainSite[1]} />
           </div>
           <div class="col">
             <Popularcitycard city={mainSite[2]} />
           </div>
           <div class="col">
             <Popularcitycard city={mainSite[3]} />
           </div>
         </div>
       </div>
      </div>
    </div>
    
  )
}



{/* // <div class="container">
//         <div class="row">
//           <div class="col">
//             <Popularcitycard/>
//           </div>
//           <div class="col">
//             <Popularcitycard/>
//           </div>
//           <div class="col">
//             <Popularcitycard/>
//           </div>
//           <div class="col">
//             <Popularcitycard/>
//           </div>
//         </div>
//       </div> */}