import NavBar from "./NavBar";
import imagen from "../images/logo.png"
function Header({nombre}) {

    return (
        <header id="header" className="header flex justify-between items-center">
            <img src={imagen} alt="logo" width={100} className="py-3 px-2" />
            <h1>Bienvenido {nombre}!</h1>
            <NavBar HoF="header" cantidad={1} esHeader={true}/>
        </header>
    );
  }

export default Header;
  