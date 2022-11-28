import {Header} from '../component/Header';
import {Footer} from '../component/Footer';
import { SeccionLista } from '../component/SeccioLista';
import {CalzadosCard} from '../component/seccionCard/CalzadosCard';
import { CalzadoLista } from "../component/listaProducts/CalzadoLista"
import '../styles/calzados.css'


export const Calzados = (props)=>{
    return(
        <div className="calzados">
             <Header/>
             <div className='calzados-main'>
                <div className='seccion-lista'>
                    <SeccionLista/>
                    <CalzadoLista/>
                </div>
                <div className='seccion-calzados-card'>
                    <CalzadosCard/>
                </div>
             </div>
             <Footer/>
             
        </div>
    )
}