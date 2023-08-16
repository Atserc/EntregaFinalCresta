import { NavLink } from "react-router-dom";

function Footer() {

    const espaciado = "py-2 px-3" 

    return (
        <footer id="footer" className="footer flex justify-start items-center">
            <p className={espaciado}> 
                Copyright &copy; - Lisandro Cresta
            </p>
            <NavLink to="/" className={espaciado}>
                    Inicio
            </NavLink>
            <NavLink to="/Productos" className={espaciado}>
                    Productos
            </NavLink>
        </footer>
    );
  }
  
export default Footer;