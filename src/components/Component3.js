import React from 'react'
import { Propertycard } from './cards/Propertycard'


export const Component3 = () => {
  return (
    <div className='container'><br /><br />
      <div className='heading-compo3'>
        <p class="h1"><strong>Some hand picked stays <br /> For you.😍</strong></p>
      </div><br />
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <Propertycard/>
        </div>
        <div className="col">
          <Propertycard/>
        </div>
        <div className="col">
          <Propertycard/>
        </div>
      </div>
      </div>
      {/* second row */}
      <div className="container">
      <div className="row">
        <div className="col">
          <Propertycard/>
        </div>
        <div className="col">
          <Propertycard/>
        </div>
        <div className="col">
          <Propertycard/>
        </div>
      </div>
      </div>
      {/* --- */}
      
    </div>
  )
}
