import React, { useState } from 'react'
import minus from "../../images/icons/minus.svg"
import plus from "../../images/icons/plus.svg"
import { useContext } from "react"
import { contexto } from "../Context";
import { Toaster, toast } from 'sonner'

function ItemCount({stock,inicial,idProd,prod}) {
    
    const padding = 'px-2'
    const valorDelContexto = useContext(contexto)
    const [contador,setContador] = useState(inicial)

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const disminuirContador = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const handleClick = () => {
        const carritoActual = valorDelContexto.carrito
        const productoExistente = carritoActual.find((item) => item.id === idProd)
    
        if (productoExistente) {
            const cantidadNueva = productoExistente.cant + contador
            
            if (cantidadNueva <= stock) {
                const carritoActualizado = carritoActual.map((item) => {
                    if (item.id === idProd) {
                        return { ...item, cant: cantidadNueva }
                    }
                    return item
                });
                
                valorDelContexto.setCarrito(carritoActualizado)
                valorDelContexto.setCantidadTotal(valorDelContexto.cantidadTotal + contador)
                setContador(0);
                toast.success('Producto ya en carrito, cantidad agregada')
            } else {
                toast.error('No se puede agregar más del stock disponible')
            }
        } else {
            const nuevoItem = { id: idProd, producto: prod, cant: contador }
            const cantidadTotalNueva = valorDelContexto.cantidadTotal + contador
            
            if (cantidadTotalNueva <= stock) {
                const nuevoCarrito = [...carritoActual, nuevoItem]
                valorDelContexto.setCarrito(nuevoCarrito)
                valorDelContexto.setCantidadTotal(cantidadTotalNueva)
                setContador(0)
                toast.success('Producto Agregado')
            } else {
                toast.error('No se puede agregar más del stock disponible')
            }
        }
    }

  return (
      <div className='itemCount px-3 py-1 my-2 mx-2'>
        <Toaster />
        <div className='flex justify-center'>
                <button>
                    <img src={minus} className='px-2' onClick={disminuirContador} alt="restar svg"/>
                </button>
                <p className='px-2 '>{contador}</p>
                <button>
                    <img src={plus} className='px-2' onClick={aumentarContador} alt="sumar svg"/>
                </button>
            </div>
            <button className={padding} onClick={handleClick}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCount