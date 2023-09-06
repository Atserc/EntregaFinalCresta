import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "../Context";

function Home(props) {

  const valorDelContexto = useContext(contexto)
  const estiloNumero = {
      style: 'decimal',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    };

  return (
    <>
        <h2 className="tituloImpact py-4 text-center mt-auto"> Nuestros mejores productos! </h2>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 x1:grid-cols-5 2x1:grid-cols-6 gap-8'>
          {props.caros && props.caros.length > 0 ? (
            props.caros.map((item, i) => (
              <article key={i} className={valorDelContexto.dark ? 'tarjetaDark card shadow-md p-5 rounded-md duration-300 transition hover:scale-105 grid grid-cols-3 gap-4' : 'tarjetaLight card shadow-md p-5 rounded-md duration-300 transition hover:scale-105 grid grid-cols-3 gap-4'}>
                <div className="col-span-3 row-span-1">
                  <img className="mx-auto mt-4 h-[150px] object-cover" src={item.urlImagen} alt={item.nombre} width={200} />
                </div>
                <div className="col-span-3">
                  <p className={valorDelContexto.dark ? 'catTarDark' : 'catTarLight'}>{item.categoria}</p>
                  <h2 >{item.arma} | {item.nombre}</h2>
                  <h3 >${item.precio.toLocaleString('es-AR', estiloNumero)}</h3>
                </div>
                <div className="col-span-3">
                  <Link to={`/${item.categoria}/${item.id}`}><button className='botDet text-right'>Detalles</button></Link>
                </div>
              </article>
          ))) : (
            <p>Fallo en base de datos</p>
          )}
        </section>
        <h2 className="tituloImpact py-4 text-center mt-auto"> Nuestros mejores precios! </h2>
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 x1:grid-cols-5 2x1:grid-cols-6 gap-8'>
          {props.baratos && props.baratos.length > 0 ? (
            props.baratos.map((item, i) => (
              <article key={i} className={valorDelContexto.dark ? 'tarjetaDark card shadow-md p-5 rounded-md duration-300 transition hover:scale-105 grid grid-cols-3 gap-4' : 'tarjetaLight card shadow-md p-5 rounded-md duration-300 transition hover:scale-105 grid grid-cols-3 gap-4'}>
                <div className="col-span-3 row-span-1">
                  <img className="mx-auto mt-4 h-[150px] object-cover" src={item.urlImagen} alt={item.nombre} width={200} />
                </div>
                <div className="col-span-3">
                  <p className={valorDelContexto.dark ? 'catTarDark' : 'catTarLight'}>{item.categoria}</p>
                  <h2 >{item.arma} | {item.nombre}</h2>
                  <h3 >${item.precio.toLocaleString('es-AR', estiloNumero)}</h3>
                </div>
                <div className="col-span-3">
                  <Link to={`/${item.categoria}/${item.id}`}><button className='botDet text-right'>Detalles</button></Link>
                </div>
              </article>
          ))) : (
            <p>Fallo en base de datos</p>
          )}
        </section>
    </>
  )
}
export default Home