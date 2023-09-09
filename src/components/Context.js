import { createContext, useState } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const CustomProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [monTotal, setMontoTotal] = useState(0)
    const [cantTotal, setCantidadTotal] = useState(0)
    const [ultimaVenta, setUltimaVenta] = useState("")

    const valorDelContexto = {
        dark: darkMode,
        setDarkMode: setDarkMode,
        carrito : carrito,
        setCarrito : setCarrito,
        montoTotal : monTotal,
        setMontoTotal : setMontoTotal,
        cantidadTotal : cantTotal,
        setCantidadTotal : setCantidadTotal,
        ultimaVenta : ultimaVenta,
        setUltimaVenta : setUltimaVenta,
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}
export default CustomProvider