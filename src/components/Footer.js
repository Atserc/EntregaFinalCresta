import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { contexto } from "./Context";

function Footer() {

    const valorDelContexto = useContext(contexto)
    const espaciado = "py-2 px-3" 

    return (
        <footer id="footer"  className={valorDelContexto.dark ? "footerDark flex justify-start items-center darkMode" :  "footerLight flex justify-start items-center"}>
            <p className={espaciado}> 
                Copyright &copy; 2023 - Lisandro Cresta
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