import Swal from 'sweetalert2';
import { useContext } from "react"
import { contexto } from "../Context";

function Formulario() {

  const valorDelContexto = useContext(contexto)

    const handleClick = () => {
      Swal.fire({
        title: 'Desea confirmar su compra?',
        showCancelButton: true,
        confirmButtonText: 'Confirmar Compra',
      }).then((result) => {
        if (result.isConfirmed) {
          /* vaciar carrito */
          Swal.fire('Compra realizada!', '', 'success').then(() => {
            window.location.href = '/Checkout';
          })
        }
      })
    }


  return (
    <div>
      <label htmlFor="nombre">Nombre:</label>
      <input id="nombre" required type="text" value={valorDelContexto.nombre}/>

      <label htmlFor="IdSteam">ID de Steam:</label>
      <input id="IdSteam" required type="number" />

      <label htmlFor="email">Email:</label>
      <input id="email" required type="email" />

      <label htmlFor="telefono">Telefono: *Opcional</label>
      <input id="telefono" type="tel" />
      
      <button className='px-2' onClick={handleClick}>Realizar compra</button>
    </div>
  )
}

export default Formulario