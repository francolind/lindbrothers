import '../styles/seccionLista.css'


export const SeccionLista = ()=>{
    return(
        <div className="seccion-lista">
         
             <div className='seccion-lista-filtro'>
                <h2>filtar por</h2>
                <div className="seccion-lista-card">envio grafis</div>
                <div className="seccion-lista-card">cuotas sin interes</div>
                <div className="seccion-lista-card">talles</div>
                <div className="seccion-lista-card">marcas</div>
                <div className="seccion-lista-card">color</div>
                <div className="seccion-lista-card">precio</div>
             </div>
           
             
        </div>
    )
}