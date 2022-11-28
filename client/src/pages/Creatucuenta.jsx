import logo from '../assets/logo1.png'
import '../styles/creatucuenta.css'
import back from '../assets/22.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import usuario from '../assets/usuario.png'
import { Link } from 'react-router-dom'


export const Creatucuenta = ()=>{
    return (
    <div className="creartucuenta">
        <div className="cuenta-creatucuenta">
            <div className="cuenta-cabezera">
                <Link to={'/'}><img src={logo} alt="logo" /></Link>
                <p>crea tu cuenta</p>
            </div>
            <div className="cuenta-form">
                <form className="cuenta-form-form" action="/">
                <label htmlFor="post-name">nombre</label>
                 <input type="text" placeholder="coloque su nombre" /> 

                <label htmlFor="post-name">apellido</label>
                <input type="text" placeholder="     coloque su apellido" />

                <label htmlFor="post-name">correo electronico</label>
                <input type="email" placeholder="     coloque su Email" />

                <label htmlFor="post-name">contarseña</label>
                <input type="password" placeholder="     coloque una contraseña" />
                <input
                    type="submit"
                    value="guardar"
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
        </div>
    </div>
    );
}