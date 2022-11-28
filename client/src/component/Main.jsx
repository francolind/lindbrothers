import exclusivo from '../assets/exclusivo1.png'
import tshirt from '../assets/T-SHIRT1.png'
import disenio from '../assets/disenios.png'
import remeras from '../assets/remeras1.png'
import calzado from '../assets/card-calzado.png'
import abrigo from '../assets/card-abrigos.png'
import pantalones from '../assets/card-pantalones.png'
import ropai from '../assets/card-ropai.png'
import camisas from '../assets/card-camisas.png'
import ropade from '../assets/card-ropade.png'
import remera from '../assets/card-remera.png'
import gorros from '../assets/card-gorros.png'
import { Link } from 'react-router-dom'


export const Main = ()=>{
    return(
        <main className="main" id='main'>
           <div className='main-container'>
            <Link to={'/calzados'}><div className='main-card'>
                    <img src={calzado} alt="calzados" />
                    <p>ver mas</p>
                </div>
            </Link>
            <Link to={'/abrigos'}>
                <div className='main-card'>
                    <img src={abrigo} alt="abrigos" />
                    <p>ver mas</p>
                </div>
            </Link>
            <Link to={'/pantalones'}>
                <div className='main-card'>
                    <img src={pantalones} alt="pantalones" />
                    <p>ver mas</p>
                </div></Link>
           <Link to={'/interior'}>
                <div className='main-card'>
                    <img src={ropai} alt="ropa interior" />
                    <p>ver mas</p>
                </div>
           </Link>
            <Link to={'/camisas'}>
                <div className='main-card'>
                    <img src={camisas} alt="camisas" />
                    <p>ver mas</p>
                </div>
            </Link>
            <Link to={'/deportiva'}>
                <div className='main-card'>
                    <img src={ropade} alt="ropa deportiva" />
                    <p>ver mas</p>
                </div>
            </Link>
            <Link  to={'/remeras'}>
                <div className='main-card'>
                    <img src={remera} alt="remeras" />
                    <p>ver mas</p>
                </div>
            </Link>
            <Link to={'/gorros'}>
                <div className='main-card'>
                    <img src={gorros} alt="gorros y sombreros" />
                    <p>ver mas</p>
                </div>
            </Link>
           </div>
        </main>
    )
}