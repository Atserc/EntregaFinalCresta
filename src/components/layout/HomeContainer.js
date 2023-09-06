import { useEffect, useState } from 'react';
import Home from './Home';
import LoadingSpinner from '../widgets/LoadingSpinner';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../../db/firebase';
import { useContext } from "react"
import { contexto } from "../Context";
import Swal from 'sweetalert2';


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

function pedirNombre(nom, setNom) {
  if (nom === "") {
    Swal.fire({
      title: 'Bienvenido! ingrese su nombre:',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      confirmButtonText: 'Confirmar',
      showLoaderOnConfirm: true
    }).then((result) => {
      const nuevoNombre = result.value;
      setNom(nuevoNombre);
    });
  }
}

function HomeContainer() {
  const valorDelContexto = useContext(contexto)
  const [caros,setCaros] = useState([])
  const [baratos,setBaratos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    pedirNombre(valorDelContexto.nombre,valorDelContexto.setNombre)
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