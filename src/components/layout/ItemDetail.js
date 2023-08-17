import ItemCount from "../widgets/ItemCount";

function ItemDetail(props) {

    const estiloNumero = {
        style: 'decimal',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      };
    
      const item = props.prod
      console.log(item)

    return (
        <p>a
        {/*<section>
            <img src={item.urlImagen} alt={item.nombre}/>
            <div>
                <p >{item.categoria}</p>
                <h2 >{item.arma} | {item.nombre}</h2>
                <h3 >${item.precio.toLocaleString('es-AR', estiloNumero)}</h3>
                <ItemCount stock={10} inicial={1} onAdd={()=>{}}/>
            </div>
        </section>*/}
        </p>
    )
}
export default ItemDetail