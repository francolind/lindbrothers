import {Header} from '../component/Header';
import {Footer} from '../component/Footer';
import { SeccionLista } from '../component/SeccioLista';
import {CalzadosCard} from '../component/seccionCard/CalzadosCard';
import '../styles/calzados.css'
import { CamisasLista } from '../component/listaProducts/CamisasLista';

export const Camisas = ()=>{
    return(
        <div className="camisas">
             <Header/>
             <div className='calzados-main'>
                <div className='seccion-lista'>
                    <SeccionLista/>
                    <CamisasLista/>
                </div>
                <div className='seccion-calzados-card'>
                    <CalzadosCard/>
                </div>
             </div>
             <Footer/>
             
        </div>
    )
}