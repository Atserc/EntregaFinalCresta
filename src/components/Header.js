import NavBar from "./widgets/NavBar";
import imagen from "../images/logo.jpg"
import { NavLink } from "react-router-dom";

function Header() {

    const dark = false
    const nombre = "vacio"

    return (
        <header id="header" className={dark ? "header flex justify-between items-center darkMode": "header flex justify-between items-center"}>
            <NavLink to="/">
                <img src={imagen} alt="logo" className="logo py-3 px-2" />
            </NavLink>
            
            <p> Bienvenido a Arg-Skins, {nombre}! </p>

            <NavBar />
        </header>
    );
  }

export default Header;