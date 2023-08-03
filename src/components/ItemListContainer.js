import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({nombre}) {
  return (
    <>
        <h2>Bienvenido {nombre}!</h2>
        <ItemCount stock={10} inicial={1} onAdd={()=>{}}/>
    </>
  )
}

export default ItemListContainer