function ItemList(props) {
    const estiloNumero = {
        style: 'decimal',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      };
  return (
    <div>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 x1:grid-cols-5 2x1:grid-cols-6 gap-8'>
            {props.data.length === 0 ? 
            <p>Cargando . . .</p> 
            : props.data.map((item,i) =>{
                return(
                    <article key={i} className='tarjeta card shadow-md p-5 rounded-md duration-300 transition hover:scale-105'>
                        <img src={item.urlImagen} alt={item.nombre}/>
                        <p className='categoriaTarjeta'>{item.categoria}</p>
                        <h2 className='h-25'>{item.arma} | {item.nombre}</h2>
                        <h3 className='h-25 '>${item.precio.toLocaleString('es-AR', estiloNumero)}</h3>
                        <button className='botonDetalles'>Comprar</button>
                    </article>
                )
            })}
        </section>
    </div>
  )
}

export default ItemList