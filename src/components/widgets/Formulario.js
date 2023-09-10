import { useState } from "react";
import { useContext } from "react"
import { contexto } from "../Context";
import Swal from "sweetalert2";
import { db } from "../../db/firebase";
import { doc, getDoc, updateDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";

function Formulario({carrito}) {

  const valorDelContexto = useContext(contexto)

  const [nombre, setNombre] = useState("")
  const [idSteam, setIdSteam] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  
  const realizarVenta = (nombre,idSteam,email,telefono,productos) => {   
    const ventasCollection = collection(db, "ventas")
    const venta = {
      comprador : {
      nombre: nombre,
      idSteam: idSteam,
      email: email,
      telefono: telefono 
      },
      fecha : serverTimestamp(),
      productos : productos
    }
    const ventaHecha = addDoc(ventasCollection,venta)
    ventaHecha
      .then((res)=>{
        valorDelContexto.setCarrito([])
        valorDelContexto.setCantidadTotal(0)
        Swal.fire('Compra realizada!', '', 'success')
        Swal.fire(
          'Compra realizada!',
          `Su id de compra es ${res.id}`,
          'success'
        )
      })
    .catch(()=>{
      Swal.fire('Algo salio mal al agregar su producto.', '', 'error')
    })

    productos.forEach(async item => {
      const prodRef = doc(db, 'productos', item.id);
  
      try {
        const docSnapshot = await getDoc(prodRef);
        const itemActual = docSnapshot.data();
        const stockComprado = item.cant;
        const stockActual = itemActual.stock;
        const nuevoStock = stockActual - stockComprado;
        itemActual.stock = nuevoStock;
        await updateDoc(prodRef, itemActual);
      } catch (error) {
        console.error(`Error al actualizar el stock para el producto con ID ${item.id}:`, error);
      }
    })
  }

  const handleSubmit = (nom,idS,email,tel,productos) => {
    setNombre(nom)
    setIdSteam(idS)
    setEmail(email)
    setTelefono(tel)
    Swal.fire({
      title: 'Desea confirmar su compra?',
      showCancelButton: true,
      confirmButtonText: 'Confirmar Compra',
    }).then((result) => {
      if (result.isConfirmed && productos.length > 0) {
        
        realizarVenta(nom,idS,email,tel,productos)

      } else if (productos.length === 0) {
        Swal.fire('Su carrito está vacío.', '', 'error');
      } else {
        Swal.fire('Compra cancelada.', '', 'error');
      }
    })
  }

  return (
    <form className={valorDelContexto.cantidadTotal === 0 ? "hidden" : "my-5 text-center" } onSubmit={ev => {
      ev.preventDefault()
      handleSubmit(ev.target.nombre.value, ev.target.IDSteam.value, ev.target.email.value, ev.target.telefono.value, carrito)
    }}>
      <label htmlFor="nombre">Nombre:</label>
      <input required type="text" name="nombre" className="mx-2"></input>
      <label htmlFor="IDSteam">ID Steam:</label>
      <input required type="text" name="IDSteam"className="mx-2"></input>
      <label htmlFor="email">Email:</label>
      <input required type="text" name="email"className="mx-2"></input>
      <label htmlFor="telefono">Telefono:</label>
      <input type="text" name="telefono"className="mx-2"></input>
      <button type="submit">Comprar</button>
    </form>
  )
}
export default Formulario
