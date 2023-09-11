import { createContext, useState } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const CustomProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [cantTotal, setCantidadTotal] = useState(0)

    const valorDelContexto = {
        dark: darkMode,
        setDarkMode: setDarkMode,
        carrito : carrito,
        setCarrito : setCarrito,
        cantidadTotal : cantTotal,
        setCantidadTotal : setCantidadTotal,
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider