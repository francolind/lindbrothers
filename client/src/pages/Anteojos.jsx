import {Header} from '../component/Header';
import {Footer} from '../component/Footer';
import { SeccionLista } from '../component/SeccioLista';
import {CalzadosCard} from '../component/seccionCard/CalzadosCard';
import '../styles/calzados.css'
import { AnteojosLista } from '../component/listaProducts/AnteojosLista';


export const Anteojos = ()=>{
    return(
        <div className="calzados">
             <Header/>
             <div className='calzados-main'>
                <div className='seccion-lista'>
                    <SeccionLista/>
                    <AnteojosLista/>
                </div>
                <div className='seccion-calzados-card'>
                    <CalzadosCard/>
                </div>
             </div>
             <Footer/>
             
        </div>
    )
}