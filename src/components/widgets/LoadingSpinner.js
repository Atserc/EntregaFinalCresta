import { useContext } from "react"
import { contexto } from "../Context";
import { CircleLoader } from "react-spinners"

function LoadingSpinner() {

  const valorDelContexto = useContext(contexto)
  const blanco = "#ffffff"

  return (
    <div className="flex items-center justify-center h-screen">
      {valorDelContexto.dark ? <CircleLoader color={blanco}/>  : <CircleLoader /> }
    </div>
  )
}
export default LoadingSpinner