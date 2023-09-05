import ItemCount from "../widgets/ItemCount";

function ItemDetail(props) {
    
    const item = props.prod
    const precioLocal = parseInt(item.precio).toLocaleString('es-AR')
    const padding = "p-4"

    const onAdd = () => {
      /*setProducts([
          ...products,
          { agregar producto }
      ])*/
      console.log("Producto Agregado");
    }

    return (
        <section className="grid grid-cols-2 justify-items-center">
            <img src={item.urlImagen} alt={item.nombre}/>
            <div className={padding}>
                <p className={padding}> {item.categoria}</p>
                <h2 className={padding}> {item.arma} | {item.nombre}</h2>
                <h3 className={padding}> Stock : {item.stock}</h3>
                <h3 className={padding}> ${precioLocal}</h3>
                <ItemCount stock={item.stock} inicial={1} onAdd={onAdd()}/>
            </div>
        </section>
    )
}
export default ItemDetail