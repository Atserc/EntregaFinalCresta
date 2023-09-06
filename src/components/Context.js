import { createContext, useState } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const CustomProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false)
    const [nom, setNom] = useState("")
    const [monTotal, setMontoTotal] = useState(0)
    const [cantTotal, setCantidadTotal] = useState(0)

    const agregarAlCarrito = () => {

    }

    const valorDelContexto = {
        carrito : [],
        montoTotal : monTotal,
        cantidadTotal : cantTotal,
        dark: darkMode,
        setDarkMode: setDarkMode,
        nombre: nom,
        setNombre: setNom
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider