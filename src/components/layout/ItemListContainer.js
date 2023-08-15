import React from 'react'
import ItemCount from '../widgets/ItemCount'
import Form from './Form'

function ItemListContainer() {
  return (
    <div className='ilm'>
        <ItemCount stock={10} inicial={1} onAdd={()=>{}}/>
        <Form />
    </div>
  )
}

export default ItemListContainer