import React from 'react'
import CartWidget from './CartWidget'

function NavBar({HoF}) {

    if (HoF === "header") {
        return (
            <nav id="BarraNav" className="flex items-center px-3">
                <a href="#" className="py-2 px-2">
                    Inicio
                </a>
                <a href="#" className="py-2 px-2">
                    Productos
                </a>
                <a href="#">
                    <CartWidget />
                </a>
            </nav>
        )
    } else {
        return (
            <nav id="BarraNav" className="flex items-center">
                <a href="#" className="py-2 px-2">
                    Inicio
                </a>
                <a href="#" className="py-2 px-2">
                    Productos
                </a>
            </nav>
        )
    }
    
}

export default NavBar