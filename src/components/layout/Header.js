import NavBar from "../widgets/NavBar";
import imagen from "../../images/logo.jpg"

function Header({nombre}) {

    return (
        <header id="header" className="header flex justify-between items-center">
            <img src={imagen} alt="logo" className="logo py-3 px-2" />
            <h1>Bienvenido a ArgSkins, {nombre} !</h1>
            <NavBar />
        </header>
    );
  }

export default Header;