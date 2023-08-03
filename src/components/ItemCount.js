import React, { useState } from 'react'

function ItemCount({stock,inicial,onAdd}) {

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

  return (
    <div className='itemCount py-1 my-2 mx-2'>
        <button className='first-letter:px-2 itemCountButton' onClick={disminuirContador}>-</button>
        <p className='px-2 '>{contador}</p>
        <button className='px-2 itemCountButton' onClick={aumentarContador}>+</button>
        <button className='px-2' onClick={onAdd}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCount