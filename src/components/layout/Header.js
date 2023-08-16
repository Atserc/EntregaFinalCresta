import NavBar from "../widgets/NavBar";
import imagen from "../../images/logo.jpg"
import { NavLink } from "react-router-dom";

function Header() {

    let nombre = "vacio"

    return (
        <header id="header" className="header flex justify-between items-center">
            <NavLink to="/">
                <img src={imagen} alt="logo" className="logo py-3 px-2" />
            </NavLink>
            
            <h1>Bienvenido a ArgSkins, {nombre} !</h1>
            
            <NavBar />
        </header>
    );
  }

export default Header;