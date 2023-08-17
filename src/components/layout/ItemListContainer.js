import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from "react-router-dom"

function getAllProducts(setData){
  fetch('../products.json')
    .then(res=>res.json())
    .then(json=>setData(json))
  }

function getProductByCategory(setData,cat){
  fetch('../products.json')
    .then(res => res.json())
    .then(json => {
      const productosFiltrados = json.filter(producto => producto.categoria === cat);
      setData(productosFiltrados);
  })
}

function ItemListContainer() {

  const [data,setData] = useState([])
  const result = useParams()
  useEffect(()=>{
    if (result.categoria){
      getProductByCategory(setData,result.categoria)
    } else {
      getAllProducts(setData)
    }
  },[result.categoria])

  return (
    <ItemList data={data} />
  )
  
}

export default ItemListContainer