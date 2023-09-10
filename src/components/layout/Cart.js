import CarroX from "../../images/icons/cartX.svg"
import prodX from "../../images/icons/bagX.svg"
import { useContext } from "react"
import { contexto } from "../Context";

function Cart({ carrito, vaciarCarrito, eliminarProducto }) {

  const valorDelContexto = useContext(contexto)

  const precioTotal = carrito.reduce(
    (total, item) => total + item.cant * item.producto.precio,
    0
  );

  const borde = "p-3 border border-black"

  return (
    <>
      <div className="text-center">
        {carrito.length > 0 && (
          <table className={valorDelContexto.dark ? 'tablaDark table-fixed mx-auto  border border-black' : 'table-fixed mx-auto  border border-black' } >
            <thead>
              <tr>
                <th className={borde} colSpan="2">Producto</th>
                <th className={borde}>Cantidad</th>
                <th className={borde}>Precio Unitario</th>
                <th className={borde}>Precio Total</th>
                <th className={borde}>
                  <img src={CarroX} onClick={vaciarCarrito} alt="vaciar carrito" />
                </th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td className={borde}>
                    <img
                      src={item.producto.urlImagen}
                      alt={item.producto.nombre}
                      width="100"
                      height="100"
                    />
                  </td>
                  <td className={borde}>{item.producto.nombre}</td>
                  <td className={borde}>{item.cant}</td>
                  <td className={borde}>${item.producto.precio.toLocaleString('es-AR')}</td>
                  <td className={borde}>${(item.cant * item.producto.precio).toLocaleString('es-AR')}</td>
                  <td className={borde}>
                    <img
                      src={prodX}
                      onClick={() => eliminarProducto(item.id)}
                      alt="eliminar producto"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="mt-4">
          <h1 className="tituloImpact">Precio Total de la Compra: ${precioTotal.toLocaleString('es-AR')} </h1>
        </div>
      </div>
    </>
  );
}

export default Cart;