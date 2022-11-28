import usuario from '../assets/usuario.png'


export const Ajustes = ()=>{
    return(
        <div className="miPerfil">
             <div>
                <img src={''} alt="ajustes" />
                <p>AJUSTES</p>
             </div>
           
             <div>
                <div>
                   
                    <h2>pais</h2>
                    <p>elige tu pais</p>
                </div>
                
                <div>
                    
                    <h2>moneda</h2>
                    <p>gestiona con que moneda usar</p>
                </div>
                <div>

                    <h2>asecibilidad</h2>
                    <p>mejora tu experiencia</p>
                </div>
               
             </div>
        </div>
    )
}