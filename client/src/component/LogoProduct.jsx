import calzado from '../assets/icono-calzado.png'
import abrigo from '../assets/icono-abrigo.png'
import equipaje from '../assets/icono-equipaje.png'
import reloj from '../assets/icono-reloj.png'
import ropai from '../assets/icono-ropai.png'
import lentes from '../assets/icono-lentes.png'
import { Link } from 'react-router-dom'



export const LogoProduct = ()=>{
    return(
        <div className="LogoProduct">
            <div className="LogoProduct-container">
                <Link to={'/calzados'}>
                    <div className="LogoProduct-card">
                        <div className='LogoProduct-card-icon'><img src={calzado} alt="CALZADO" /></div>
                        <div className='LogoProduct-card-p'><p>CALZADOS</p></div>
                    </div>
                </Link>
                <Link to={'/abrigos'}>
                    <div className="LogoProduct-card">
                        <div className='LogoProduct-card-icon'><img src={abrigo} alt="ABRIGOS" /></div>
                        <div className='LogoProduct-card-p'><p>ABRIGOS</p></div>
                    </div>
                </Link>
                <Link to={'/equipaje'}>
                    <div className="LogoProduct-card">
                        <div className='LogoProduct-card-icon'><img src={equipaje} alt="BOLSAS Y EQUIPAJE" /></div>
                        <div className='LogoProduct-card-p'><p>BOLSAS Y EQUIPAJE</p></div>
                    </div>
                </Link>
                <Link to={'/relojes'}>
                    <div className="LogoProduct-card">
                        <div className='LogoProduct-card-icon'><img src={reloj} alt="JOYA Y RELOJES" /></div>
                        <div className='LogoProduct-card-p'><p>JOYA Y RELOJES</p></div>
                    </div>
                </Link>
                <Link to={'/interior'}> 
                    <div className="LogoProduct-card">
                        <div className='LogoProduct-card-icon'><img src={ropai} alt="ROPA INTERIOR" /></div>
                        <div className='LogoProduct-card-p'><p>ROPA INTERIOR</p></div>
                    </div>
                </Link>
                <Link to={'/anteojos'}>
                    <div className="LogoProduct-card">
                        <div className='LogoProduct-card-icon'><img src={lentes} alt="ACESORIOS DE MODA" /></div>
                        <div className='LogoProduct-card-p'><p>ACESORIOS DE MODA</p></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}