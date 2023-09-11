import React, { useContext } from 'react'
import sol from "../../images/icons/sun.svg"
import luna from "../../images/icons/moon.svg"
import { contexto } from "../Context";

function DarkLight() {
  
    const valorDelContexto = useContext(contexto)

    const clickHandler = () => {
        valorDelContexto.setDarkMode(!valorDelContexto.dark)
    }

    return (
    <div className='flex'>
        <img src={sol} className='px-2 max-w-10 max-h-10' alt="sol svg"/>
        <div id='botonDL'>
            <div className={valorDelContexto.dark ? `toggle active` : `toggle`} onClick={clickHandler}></div>
        </div>
        <img src={luna} className='px-2 max-w-16 max-h-16' alt="luna svg"/>
    </div>
  )
}

export default DarkLight