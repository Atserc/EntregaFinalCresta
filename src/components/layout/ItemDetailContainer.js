import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"

function getProduct(setProd,id){
  fetch('../products.json')
    .then(res => res.json())
    .then(json => {
      const prod = json.find((prod) => prod.id === id);
      setProd(prod);
  })
}

function ItemDetailContainer() {

  const [prod,setProd] = useState({})
  const { id } = useParams()
  useEffect(()=>{
      getProduct(setProd,parseInt(id))
  },[id])

  return (
    <ItemDetail prod={prod} />
  )
}

export default ItemDetailContainer