import {useState} from "react";

function Main(){
    //variables
    let [contador,setContador] = useState(0);

    //funciones
    const aumentarContador = () => {
        setContador(contador + 1);
    }

    const disminuirContador = () => {
        setContador(contador - 1);
    }

    const reiniciarContador = () => {
        setContador(0);
    }

    //vista
    return (
        <main id="main" className="main grow px-2 py-2">
            <p>Contador : {contador}</p>
            <button className="px-3" onClick={aumentarContador}>Aumentar</button>
            <button className="px-3" onClick={disminuirContador}>Disminuir</button>
            <button className="px-3" onClick={reiniciarContador}>Reiniciar</button>
        </main>
    );
  }
  
export default Main;