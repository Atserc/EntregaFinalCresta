import { useEffect, useState } from 'react'
import ItemList from './ItemList';

function getProductos(setData){
  fetch('../products.json')
    .then(res=>res.json())
    .then(json=>setData(json))
  }

function ItemListContainer() {

  const [data,setData] = useState([])

  useEffect(()=>{
    getProductos(setData)
  },[])

  return (
    <ItemList data={data} />
  )
  
}

export default ItemListContainer