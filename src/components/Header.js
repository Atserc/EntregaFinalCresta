import NavBar from "./widgets/NavBar";
import imagen from "../images/logo.jpg"
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { contexto } from "./Context";

function Header() {

    const valorDelContexto = useContext(contexto)

    return (
        <header id="header" className={valorDelContexto.dark ? "headerDark sm:flex sm:justify-between sm:items-center": "headerLight sm:flex sm:justify-between sm:items-center"}>
            <NavLink to="/">
                <img src={imagen} alt="logo" className="logo py-3 px-2 mx-auto" />
            </NavLink>
            
            <NavBar />
        </header>
    );
  }

export default Header;