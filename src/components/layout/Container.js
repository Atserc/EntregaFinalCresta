import React, { useEffect, useState } from 'react'
import Presentacional from './Presentacional';

function getProductos(setData){
  fetch('../products.json')
    .then(res=>res.json())
    .then(json=>setData(json))
  }

function Container() {

  const [data,setData] = useState([])

  useEffect(()=>{
    getProductos(setData)
  },[])

  return (
    <Presentacional data={data} />
  )
  
}

export default Container