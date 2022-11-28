import {Header} from '../component/Header';
import {Footer} from '../component/Footer';
import { SeccionLista } from '../component/SeccioLista';
import {CalzadosCard} from '../component/seccionCard/CalzadosCard';
import { PantalonesLista } from "../component/listaProducts/PantalonesLista"
import '../styles/calzados.css'


export const Pantalones = ()=>{
    return(
        <div className="pantalones">
             <Header/>
             <div className='calzados-main'>
                <div className='seccion-lista'>
                    <SeccionLista/>
                    <PantalonesLista/>
                </div>
                <div className='seccion-calzados-card'>
                    <CalzadosCard/>
                </div>
             </div>
             <Footer/>
             
        </div>
    )
}