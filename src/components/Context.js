import { createContext, useState } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const CustomProvider = (props) => {

    const [darkMode, setDarkMode] = useState(false);

    const valorDelContexto = {
        carrito : [],
        montoTotal : 0,
        cantidadTotal : 0,
        dark: darkMode,
        setDarkMode: setDarkMode
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
  )
}
export default CustomProvider