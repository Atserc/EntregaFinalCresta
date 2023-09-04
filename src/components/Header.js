import NavBar from "./widgets/NavBar";
import imagen from "../images/logo.jpg"
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { contexto } from "./Context";

function Header() {

    const valorDelContexto = useContext(contexto)
    const nombre = "vacio"

    return (
        <header id="header" className={valorDelContexto.dark ? "headerDark flex justify-between items-center ": "headerLight flex justify-between items-center"}>
            <NavLink to="/">
                <img src={imagen} alt="logo" className="logo py-3 px-2" />
            </NavLink>
            
            <p> Bienvenido a Arg-Skins, {valorDelContexto.nom}! </p>

            <NavBar />
        </header>
    );
  }

export default Header;