import { useContext } from "react"
import { contexto } from "../Context";

function Checkout() {
  const valorDelContexto = useContext(contexto)
  const idCompra = valorDelContexto.ultimaVenta

  return (
    <div className="flex justify-center p-8">
      <div className="justify-center text-center">
      <h1 className="py-5 tituloImpact">su ID de compra es: {idCompra}</h1>
      <h3 className="py-5 tituloImpact">Gracias por su compra!</h3>
      <p className="py-5">Pronto recibirá la oferta de su skin por steam.</p>
      </div>
    </div>
  )
}
export default Checkout