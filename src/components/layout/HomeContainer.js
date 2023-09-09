import { useEffect, useState } from 'react';
import Home from './Home';
import LoadingSpinner from '../widgets/LoadingSpinner';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../../db/firebase';

function traerTopsAltos(setCaros,setLoading) {

  const productsRef = collection(db, 'productos');
  const top4alto = getDocs(query(productsRef, orderBy('precio', 'desc'), limit(4)));
  
  top4alto
    .then((resultado) => {
      const aux = resultado.docs.map((doc) => {
        const producto = {
          id : doc.id,
          ...doc.data()
        }
        return producto
      })
      setCaros(aux);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
}
function traerTopsBajos(setBaratos,setLoading) {
  const productsRef = collection(db, 'productos');
  const top4bajo = getDocs(query(productsRef, orderBy('precio', 'asc'), limit(4)));
  
  top4bajo
    .then((resultado) => {
      const aux = resultado.docs.map((doc) => {
        const producto = {
          id : doc.id,
          ...doc.data()
        }
        return producto
      })
      setBaratos(aux);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
}

function HomeContainer() {
  const [caros,setCaros] = useState([])
  const [baratos,setBaratos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    traerTopsAltos(setCaros,setLoading)
    traerTopsBajos(setBaratos,setLoading)
  },[])

  return (
    <>
      {loading ? <LoadingSpinner /> : <Home caros={caros} baratos={baratos} />}
    </>
  )
}

export default HomeContainer