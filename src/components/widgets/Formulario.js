/*
import { useContext, useState } from "react"
import Swal from 'sweetalert2';
import { contexto } from "../Context";
import { db } from "../../db/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


 function realizarVenta(formComprador,productos) {
  const ventasCollection = collection(db, "ventas")
  const venta = {
    comprador : {
      nombre: formComprador.nombre,
      idSteam: formComprador.idSteam,
      email: formComprador.email,
      telefono: formComprador.telefono 
    },
    fecha : serverTimestamp(),
    productos : productos
  }
  const ventaHecha = addDoc(ventasCollection,venta)
  ventaHecha
    .then((res)=>{

    })
    .catch((err)=>{
      Swal.fire('Algo salio mal.', '', 'error')
    })
}
*/
function Formulario(props) {

  /*const productos = props.prods
  const valorDelContexto = useContext(contexto)

  const [formComprador, setFormComprador] = useState({
    nombre: "",
    idSteam: "",
    email: "",
    telefono: 0
  });

  const handleChange = (e) => {
    setFormComprador({
      ...formComprador,
      [e.target.id]: e.target.value
    });
  }

  const handleClick = () => {
    Swal.fire({
      title: 'Desea confirmar su compra?',
      showCancelButton: true,
      confirmButtonText: 'Confirmar Compra',
    }).then((result) => {
      if (result.isConfirmed) {
        
        realizarVenta(formComprador,productos)

        vaciar carrito
        Swal.fire('Compra realizada!', '', 'success').then(() => {
          window.location.href = '/Checkout';
        })

      } else {
        Swal.fire('Algo salio mal.', '', 'error')
      }
    })
  } */

  return (
    <div className="my-5 text-center">
      <p>Formulario</p>
    </div>
    )
  }
  
  export default Formulario

  /* <form>
    <label htmlFor="nombre">Nombre:</label>
    <input id="nombre" required type="text" value={formComprador.nombre} onChange={handleChange} />

    <label htmlFor="IdSteam">ID de Steam:</label>
    <input id="IdSteam" required type="text" value={formComprador.idSteam} onChange={handleChange} />

    <label htmlFor="email">Email:</label>
    <input id="email" required type="email" value={formComprador.email} onChange={handleChange} />

    <label htmlFor="telefono">Telefono: *Opcional</label>
    <input id="telefono" type="tel" value={formComprador.telefono} onChange={handleChange} />
    
    <button className='px-2' onClick={handleClick}>Realizar compra</button>
  </form> */