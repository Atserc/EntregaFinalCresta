import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./layout/ItemListContainer";
import ItemDetailContainer from "./layout/ItemDetailContainer";
import CartContainer from "./layout/CartContainer";
import { useContext } from "react"
import { contexto } from "./Context";

function Main(){

    const valorDelContexto = useContext(contexto)

    return (
        <main id="main" className={valorDelContexto.dark ? "mainDark px-2 py-2 darkMode": "mainLight px-2 py-2"}>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/Productos" element={<ItemListContainer />} />
                <Route path="/:categoria" element={<ItemListContainer />} />
                <Route path="/:categoria/:id" element={<ItemDetailContainer />} />
                <Route path="/Carrito" element={<CartContainer />} />
                <Route path="*" element={<p>404: Ruta incorrecta</p>} />
            </Routes>
        </main>
    );
  }

export default Main;