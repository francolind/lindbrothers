import {Header} from '../component/Header';
import {Footer} from '../component/Footer';
import { SeccionLista } from '../component/SeccioLista';
import {CalzadosCard} from '../component/seccionCard/CalzadosCard';
import '../styles/calzados.css'
import { RemerasLista } from '../component/listaProducts/RemerasLista';

export const Remeras = ()=>{
    return(
        <div className="calzados">
             <Header/>
             <div className='calzados-main'>
                <div className='seccion-lista'>
                    <SeccionLista/>
                    <RemerasLista/>
                </div>
                <div className='seccion-calzados-card'>
                    <CalzadosCard/>
                </div>
             </div>
             <Footer/>
             
             
        </div>
    )
}