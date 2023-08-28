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
    <>
        <img src={sol} className='px-2' alt="sol svg"/>
        <div id='botonDL'>
            <div className={valorDelContexto.dark ? `toggle active` : `toggle`} onClick={clickHandler}></div>
        </div>
        <img src={luna} className='px-2' alt="luna svg"/>
    </>
  )
}

export default DarkLight