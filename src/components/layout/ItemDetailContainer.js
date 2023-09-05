import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom"
import LoadingSpinner from '../widgets/LoadingSpinner';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../db/firebase';

async function getProduct(setProd,id,setLoading) {
  const docRef = doc(db, "productos", id);
  try {
    const docTraido = await getDoc(docRef);
    const prod = docTraido.data();
    setProd(prod)
    console.log(prod);
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}

function ItemDetailContainer() {

  const [prod,setProd] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()
  useEffect(()=>{
      getProduct(setProd,id,setLoading)
  },[id])

  return (
    <>
      {loading ? <LoadingSpinner /> : <ItemDetail prod={prod} />}
    </>
    
  )
}

export default ItemDetailContainer