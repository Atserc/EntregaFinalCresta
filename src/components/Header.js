import NavBar from "./NavBar";
import imagen from "../images/logo.png"
function Header() {

    return (
        <header id="header" className="header flex justify-between items-center">
            <img src={imagen} alt="logo" className="logo py-3 px-2" />
            <h1>Bienvenido a ArgSkins!</h1>
            <NavBar />
        </header>
    );
  }

export default Header;
  