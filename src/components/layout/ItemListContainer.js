import { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from "react-router-dom"
import LoadingSpinner from '../widgets/LoadingSpinner';

function getAllProducts(setData,setLoading){
  fetch('../products.json')
    .then(res=>res.json())
    .then(json=>setData(json))
    .catch(err => console.log(err))
    .finally(setLoading(false))
  }

function getProductByCategory(setData,cat,setLoading){
  fetch('../products.json')
    .then(res => res.json())
    .then(json => {
      const productosFiltrados = json.filter(producto => producto.categoria === cat);
      setData(productosFiltrados);
    })
    .catch(err => console.log(err))
    .finally(setLoading(false))
}

function ItemListContainer() {

  const [data,setData] = useState([])
  const result = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if (result.categoria){
      getProductByCategory(setData,result.categoria,setLoading)
    } else {
      getAllProducts(setData,setLoading)
    }
  },[result.categoria])

  return (
    <>
      {loading ? <LoadingSpinner /> : <ItemList data={data} />}
    </>
  )
  
}

export default ItemListContainer