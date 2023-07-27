import NavBar from "./NavBar";

function Header() {
    return (
        <header id="header" className="header flex justify-between">
            <h1>Imagen Logo</h1>
            <NavBar HoF="header" cantidad={1} esHeader={true}/>
        </header>
    );
  }

export default Header;
  