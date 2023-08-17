import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

function Main(){

    const dark = false

    return (
        <main id="main" className={dark ? "main px-2 py-2 darkMode": "main px-2 py-2"}>
            
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/Productos" element={<ItemListContainer />} />
                <Route path="/:categoria" element={<ItemListContainer />} />
                <Route path="/:categoria/:id" element={<ItemDetailContainer />} />
                <Route path="/Carrito" element={<p>Carrito</p>} />
                <Route path="*" element={<p>404: Ruta incorrecta</p>} />
            </Routes>
        </main>
    );
  }

export default Main;