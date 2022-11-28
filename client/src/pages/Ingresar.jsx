import logo from '../assets/logo1.png'
import '../styles/Ingresar.css'
import back from '../assets/22.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import { Link } from 'react-router-dom'


export const Ingresar = ()=>{
    return (
    <div className="ingresarcuenta">
        <div className="cuenta-ingresacuenta">
            <div className="cuenta-cabezera">
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
                <p>ingresa a tu cuenta</p>
            </div>
            <div className="cuenta-form">
                <form className="cuenta-form-form" action="/">
                
                <label htmlFor="post-name">correo electronico</label>
                <input type="email" placeholder="coloque su Email" />

                <label htmlFor="post-name">contarseña</label>
                <input type="password" placeholder="coloque una contraseña" />
                <input
                    type="submit"
                    value="ingresar"
                    className="cuenta-form-button"
                />
                </form>
            </div>
            <div className='cuenta-button-gf'>
                <button className='button-fa'> <img src={facebook} alt="" /></button>
                <button className='button-go'> <img src={google} alt="" /></button>
            </div>
        </div>
        <div className="cuenta-back">
          <img src={back} alt="backgraund" />
          <div></div>
        </div>
    </div>
    );
}