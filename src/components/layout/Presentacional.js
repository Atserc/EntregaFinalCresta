import React from 'react'

function Presentacional(props) {
  return (
    <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 x1:grid-cols-5 2x1:grid-cols-6 gap-8">
            {props.data.length === 0 ? 
            <p>Cargando . . .</p> 
            : props.data.map((item,i) =>{
                return(
                    <article key={i} className="card shadow-md p-5 rounded-md duration-300 transition hover:scale-105">
                        <h2 className='h-28'>{item.title}</h2>
                        <h3 className='h-25'>${item.price}</h3>
                        <img src={item.image} alt={item.title}/>
                    </article>
                )
            })}
        </section>
        
    </div>
  )
}

export default Presentacional