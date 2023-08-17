import CartWidget from './CartWidget'
import DarkLight from './DarkLight'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const espaciado = "py-2 px-2" 
    return (
        <nav id="BarraNav" className="flex items-center">
            
            

            <NavLink to="/Productos" className={espaciado}>
                Todas las skins
            </NavLink>

            <NavLink to="/Rifles" className={espaciado}>
                Rifles
            </NavLink>

            <NavLink to="/Pistolas" className={espaciado}>
                Pistolas
            </NavLink>

            <NavLink to="/Pesadas" className={espaciado}>
                Pesadas
            </NavLink>

            <NavLink to="/Subfusiles" className={espaciado}>
                Subfusiles
            </NavLink>

            <NavLink to="/Cuchillos" className={espaciado}>
                Cuchillos
            </NavLink>

            <DarkLight />

            <NavLink to="/Carrito" className={espaciado}>
                <CartWidget />
            </NavLink>
        </nav>
    )
}

export default NavBar