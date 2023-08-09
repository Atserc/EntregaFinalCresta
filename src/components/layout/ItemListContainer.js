import React from 'react'
import ItemCount from '../widgets/ItemCount'
import Form from './Form'

function ItemListContainer({nombre}) {
  return (
    <div className='ilm'>
        <h2>Bienvenido {nombre}!</h2>
        <ItemCount stock={10} inicial={1} onAdd={()=>{}}/>
        <Form />
    </div>
  )
}

export default ItemListContainer