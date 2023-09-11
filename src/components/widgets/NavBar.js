import CartWidget from './CartWidget'
import DarkLight from './DarkLight'
import { NavLink } from 'react-router-dom'

function NavBar() {
    const tailwind = "text-center py-2 px-2" 
    return (
        <nav className="flex flex-col sm:flex-row sm:items-center">

            <NavLink to="/Productos" className={tailwind}>
                Todas las skins
            </NavLink>

            <NavLink to="/Rifles" className={tailwind}>
                Rifles
            </NavLink>

            <NavLink to="/Pistolas" className={tailwind}>
                Pistolas
            </NavLink>

            <NavLink to="/Pesadas" className={tailwind}>
                Pesadas
            </NavLink>

            <NavLink to="/Subfusiles" className={tailwind}>
                Subfusiles
            </NavLink>

            <NavLink to="/Cuchillos" className={tailwind}>
                Cuchillos
            </NavLink>

            <div className={`mx-auto ${tailwind}`}>
                <DarkLight />
            </div>

            <NavLink to="/Carrito" className={`mx-auto ${tailwind}`}>
                <CartWidget />
            </NavLink>
        </nav>
    )
}

export default NavBar