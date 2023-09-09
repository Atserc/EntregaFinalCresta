import CarroX from "../../images/icons/cartX.svg"
import prodX from "../../images/icons/bagX.svg"
import { useContext } from "react"
import { contexto } from "../Context";

function Cart({ carrito, vaciarCarrito, eliminarProducto }) {

  const valorDelContexto = useContext(contexto)

  const precioTotal = carrito.reduce(
    (total, item) => total + item.cant * item.producto.precio,
    0
  );

  return (
    <>
      <div className="text-center">
        {carrito.length > 0 && (
          <table className={valorDelContexto.dark ? 'tablaDark table-fixed mx-auto' : 'table-fixed mx-auto' } >
            <thead>
              <tr>
                <th className="p-3"></th>
                <th className="p-3">Producto</th>
                <th className="p-3">Cantidad</th>
                <th className="p-3">Precio Unitario</th>
                <th className="p-3">Precio Total</th>
                <th className="p-3">
                  <img src={CarroX} onClick={vaciarCarrito} alt="vaciar carrito" />
                </th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td className="p-3">
                    <img
                      src={item.producto.urlImagen}
                      alt={item.producto.nombre}
                      width="100"
                      height="100"
                    />
                  </td>
                  <td className="p-3">{item.producto.nombre}</td>
                  <td className="p-3">{item.cant}</td>
                  <td className="p-3">${item.producto.precio.toLocaleString('es-AR')}</td>
                  <td className="p-3">${(item.cant * item.producto.precio).toLocaleString('es-AR')}</td>
                  <td className="p-3">
                    <img
                      src={prodX}
                      onClick={() => eliminarProducto(item.id)}
                      alt="eliminar producto"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="mt-4">
          <h1 className="tituloImpact">Precio Total de la Compra: ${precioTotal.toLocaleString('es-AR')} </h1>
        </div>
      </div>
    </>
  );
}

export default Cart;

/* 
import { useContext, useState } from "react"
import Swal from 'sweetalert2';
import { contexto } from "../Context";
import { db } from "../../db/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

  const realizarVenta = (formComprador,productos,setTokenVenta) => {
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
      setTokenVenta(res.id)
    })
    .catch(()=>{
      Swal.fire('Algo salio mal.', '', 'error')
    })
}

const productos = []
const valorDelContexto = useContext(contexto)

const [tokenVenta, setTokenVenta] = useState("")

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
      
      realizarVenta(formComprador,productos,setTokenVenta)
      valorDelContexto.ultimaVenta = tokenVenta;

      valorDelContexto.carrito = []
      Swal.fire('Compra realizada!', '', 'success').then(() => {
        window.location.href = '/Checkout';
      })

    } else {
      Swal.fire('Algo salio mal.', '', 'error')
    }
  })
}  */

/* return
      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input id="nombre" required type="text" value={formComprador.nombre} onChange={handleChange} />

        <label htmlFor="IdSteam">ID de Steam:</label>
        <input id="IdSteam" required type="text" value={formComprador.idSteam} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input id="email" required type="email" value={formComprador.email} onChange={handleChange} />

        <label htmlFor="telefono">Telefono: *Opcional</label>
        <input id="telefono" type="tel" value={formComprador.telefono} onChange={handleChange} />
        
        <button className='px-2' onClick={handleClick}>Realizar compra</button>
      </form>
*/