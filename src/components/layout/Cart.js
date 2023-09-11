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
    <div>
      {carrito.length > 0 ? (
        <div className="text-center">
          <table
            className={
              valorDelContexto.dark
                ? "tablaDark table-fixed mx-auto  border border-black"
                : "table-fixed mx-auto  border border-black"
            }
          >
            <thead>
              <tr>
                <th className={borde} colSpan="2">
                  Producto
                </th>
                <th className={borde}>Cantidad</th>
                <th className={`hidden md:table-cell ${borde}`}>Precio Unitario</th>
                <th className={borde}>Precio Total</th>
                <th className={`flex cursor-pointer ${borde}`} onClick={vaciarCarrito} >
                  <img src={CarroX} alt="vaciar carrito" /> 
                  <p className="px-2">Vaciar carrito</p>
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
                  <td className={`hidden md:table-cell ${borde}`}>
                    ${item.producto.precio.toLocaleString("es-AR")}
                  </td>
                  <td className={borde}>
                    ${(
                      item.cant * item.producto.precio
                    ).toLocaleString("es-AR")}
                  </td>
                  <td className={`text-center ${borde}`}>
                    <img src={prodX} className="mx-auto cursor-pointer" onClick={() => eliminarProducto(item.id)} alt="eliminar producto" /> 
                    <p className="px-2 cursor-pointer" onClick={() => eliminarProducto(item.id)}>Eliminar producto</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4">
            <h1 className="tituloImpact">
              Precio Total de la Compra: ${precioTotal.toLocaleString("es-AR")}
            </h1>
          </div>
        </div>
      ) : (
        <div className="tituloImpact flex justify-center my-5">
          <h2>Sin productos en el carro</h2>
        </div>
      )}
    </div>
  );
}

export default Cart