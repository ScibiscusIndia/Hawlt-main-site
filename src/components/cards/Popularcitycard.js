import React from 'react'
import './Stylecard.css'

export const Popularcitycard = (props) => {
  return (
    <div className='card-one-main'>
       <div class="card" >
            <img src="/images/bang.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h6>{props.city.name}</h6>
                <p class="card-text">{props.city.stay} Stays</p>
            </div>
        </div>
    </div>
  )
}
