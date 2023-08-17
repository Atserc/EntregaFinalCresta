import ItemCount from "../widgets/ItemCount";

function ItemDetail(props) {
    
      const item = props.prod
      const precioLocal = parseInt(item.precio).toLocaleString('es-AR');


    return (
        <section className="grid grid-cols-2 justify-items-center">
            <img src={item.urlImagen} alt={item.nombre}/>
            <div className="justify-items-center">
                <p >{item.categoria}</p>
                <h2 >{item.arma} | {item.nombre}</h2>
                <h3 >${precioLocal}</h3>
                <ItemCount stock={10} inicial={1} onAdd={()=>{}}/>
            </div>
        </section>
    )
}
export default ItemDetail