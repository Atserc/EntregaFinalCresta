import React, { useState } from 'react'
import sol from "../../images/icons/sun.svg"
import luna from "../../images/icons/moon.svg"

function DarkLight() {
  
    const [valor,setValor] = useState(false)


    const clickHandler = () => {
        setValor(!valor)
    }

    return (
    <>
        <img src={sol} className='px-2' alt="sol svg"/>
        <div id='botonDL'>
            <div className={valor ? `toggle active` : `toggle`} onClick={clickHandler}></div>
        </div>
        <img src={luna} className='px-2' alt="luna svg"/>
    </>
  )
}

export default DarkLight