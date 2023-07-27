import React from 'react'

function NavBar({HoF}) {

    if (HoF === "header") {
        return (
            <nav id="BarraNav" className="flex items-center">
                <a href="#" className="py-2 px-2">
                    Inicio
                </a>
                <a href="#" className="py-2 px-2">
                    Productos
                </a>
                <a href="#">
                    <img src="" alt="" />
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