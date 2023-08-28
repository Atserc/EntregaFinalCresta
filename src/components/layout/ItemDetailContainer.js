import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"
import LoadingSpinner from '../widgets/LoadingSpinner';

function getProduct(setProd,id,setLoading){
  fetch('../products.json')
    .then(res => res.json())
    .then(json => {
      const prod = json.find((prod) => prod.id === id);
      setProd(prod);
  })
  .catch(err => console.log(err))
  .finally(setLoading(false))
}

function ItemDetailContainer() {

  const [prod,setProd] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  useEffect(()=>{
      getProduct(setProd,parseInt(id),setLoading)
  },[id])

  return (
    <>
      {loading ? <LoadingSpinner /> : <ItemDetail prod={prod} />}
    </>
    
  )
}

export default ItemDetailContainer