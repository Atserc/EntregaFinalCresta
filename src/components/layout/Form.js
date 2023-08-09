import React, { useRef } from 'react'

function Form() {

    const nomRef = useRef(null) //Se usa para variables que no son reactivos, pero persiste en el tiempo
    //Guarda el input donde se usa dentro de un valor llamado "current" en el objeto

    const handleClick = () => {
        console.log(nomRef.current.value);
    }

  return (
    <>
        <input ref={nomRef} type="text" />
        <button className='px-2' onClick={handleClick}>ver input en consola</button>
    </>
  )
}

export default Form