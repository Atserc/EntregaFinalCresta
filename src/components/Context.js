import { createContext } from "react"

export const contexto = createContext()
const Provider = contexto.Provider

const CustomProvider = (props) => {

    const valorDelContexto = {
        carrito : [],
        montoTotal : 0,
        cantidadTotal : 0
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
  )
}
export default CustomProvider