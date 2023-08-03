import React from 'react'
import CartWidget from './CartWidget'
import DarkLight from './DarkLight'

function NavBar() {
    const espaciado = "py-2 px-2" 
    return (
        <nav id="BarraNav" className="flex items-center">
            <a href="#" className={espaciado}>
                Inicio
            </a>
            <a href="#" className={espaciado}>
                Productos
            </a>
            <a href="#" className={espaciado}>
                Login
            </a>
            <DarkLight />
            <a href="#" className={espaciado}>
                <CartWidget />
            </a>
        </nav>
    )
}

export default NavBar