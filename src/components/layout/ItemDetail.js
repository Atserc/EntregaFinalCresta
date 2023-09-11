import ItemCount from "../widgets/ItemCount";

function ItemDetail(props) {
    const id = props.id
    const item = props.prod
    const precioLocal = parseInt(item.precio).toLocaleString('es-AR')
    const padding = "p-4"

    return (
        <section>
            <h2 className="text-center tituloImpact">{item.nombre}</h2>
            <div className="grid grid-cols-2 justify-items-center">
                <img src={item.urlImagen} alt={item.nombre}/>
                <div className={padding}>
                    <h2 className={padding}> Arma: {item.arma}</h2>
                    <h2 className={padding}> Categoría: {item.categoria}</h2>
                    <h2 className={padding}> Calidad: {item.calidad}</h2>
                    <h2 className={padding}> Desgaste: {item.desgaste}</h2>
                    <h3 className={padding}> Stock : {item.stock}</h3>
                    <h3 className={padding}> Precio: ${precioLocal}</h3>
                    <ItemCount stock={item.stock} inicial={1} idProd={id} prod={item} />
                </div>
            </div>
        </section>
    )
}
export default ItemDetail