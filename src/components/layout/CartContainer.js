import Cart from "./Cart"
import { useState, useEffect } from "react";
import { useContext } from "react"
import { contexto } from "../Context";
import { Toaster, toast } from "sonner";
import Formulario from "../widgets/Formulario";


function CartContainer() {
  
  const valorDelContexto = useContext(contexto)
  const [carro,setCarro] = useState([])
  
  const vaciarCarrito = () => {
    valorDelContexto.setCarrito([])
    valorDelContexto.setCantidadTotal(0)
    toast.error('Se eliminaron todos los productos del carro')
  }

  const eliminarProducto = (id) => {
    const productoAEliminar = carro.find((item) => item.id === id);
  
    if (productoAEliminar) {
      const carritoActualizado = carro.filter((item) => item.id !== id);
      valorDelContexto.setCantidadTotal(valorDelContexto.cantidadTotal - productoAEliminar.cant);
      setCarro(carritoActualizado);
      valorDelContexto.setCarrito(carritoActualizado);
      toast.error('Producto eliminado');
    }
  }

  useEffect(()=>{
    setCarro(valorDelContexto.carrito)
  },[valorDelContexto.carrito])

  return (
    <>
      <Toaster />
      <Cart carrito = {carro} vaciarCarrito={vaciarCarrito} eliminarProducto={eliminarProducto} />
      <Formulario />
    </>
  )
}

export default CartContainer