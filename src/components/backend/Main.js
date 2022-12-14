import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export const mainPropData = null;

export const Main = () => {
    const [ propDet, setPropData ] = useState();
    useEffect(()=>{
        const fetchPromise = fetch("/properties_menu");
        fetchPromise.then(response => {
            return response.json();
            }).then(e => {
                setPropData(e);
                mainPropData = propDet;
        })
    },[]);
  return (
    <div></div>
  )
}
