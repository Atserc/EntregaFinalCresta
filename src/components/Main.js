import imagen from "../images/logo192.png"

function Main() {
    let nombre = "Lisandro"
    return (
        <main id="main" className="main">
            <h2>Hola {nombre}</h2>
            <img src={imagen} alt="logo react" />
        </main>
    );
  }
  
export default Main;