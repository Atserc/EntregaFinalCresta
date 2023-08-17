import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from "react-router-dom"

function getAllProducts(setData){
  fetch('../products.json')
    .then(res=>res.json())
    .then(json=>setData(json))
  }

function getProductByCategory(setData){ /* editar para que haga un mapeo por categoria */
  fetch('../products.json')
    .then(res=>res.json())
    .then(json=>setData(json))
  }

function ItemListContainer() {

  const [data,setData] = useState([])
  const result = useParams()
  useEffect(()=>{
    if (result.categoria){
      getProductByCategory(setData)
      console.log("cat")
    } else {
      getAllProducts(setData)
      console.log("todo")
    }
  },[result.categoria])


  
  return (
    <ItemList data={data} />
  )
  
}

export default ItemListContainer