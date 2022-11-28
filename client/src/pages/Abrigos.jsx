import { Footer } from '../component/Footer';
import {Header} from '../component/Header';
import { AbrigosLista } from '../component/listaProducts/AbrigosLista';
import { SeccionLista } from '../component/SeccioLista';
import { CalzadosCard } from '../component/seccionCard/CalzadosCard';
import '../styles/abrigos.css'

export const Abrigos = ()=>{
    return(
        <div className="abrigos">
             <Header/>
           <div className='abrigos-main'>
                <div className='abrigos-section'>
                    <SeccionLista/>
                    <AbrigosLista/>
                </div>
                <div className='abrigos-container'>
                    <CalzadosCard/>
                </div>
           </div>
             <Footer/>
        </div>
    )
}