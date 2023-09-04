import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import LoadingSpinner from '../widgets/LoadingSpinner';
import { db } from "../../db/firebase";
import { getDocs , collection } from "firebase/firestore";

function getAllProducts(setData,setLoading){
  
  const prodCollection = collection(db, "productos")
  const consultaProductos = getDocs(prodCollection)

  consultaProductos
    .then((resultado) => {
      const arrayData = []
      resultado.docs.forEach((prod)=>{
        arrayData.push(prod.data())
        })
      setData(arrayData)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
}

function getProductByCategory(setData,cat,setLoading){
  
  const prodCollection = collection(db, "productos")
  const consultaProductos = getDocs(prodCollection)

  consultaProductos
    .then((resultado) => {
      const arrayData = []
      resultado.docs.forEach((prod)=>{
        arrayData.push(prod.data())
        })
      const productosFiltrados = arrayData.filter(producto => producto.categoria === cat);
      setData(productosFiltrados);
    })
    .catch( (err) => {
        console.log(err);
    })
    .finally(() => {
      setLoading(false)
    })
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