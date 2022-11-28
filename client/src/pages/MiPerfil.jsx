import usuario from '../assets/usuario.png'


export const MiPerfil = ()=>{
    return(
        <div className="miPerfil">
             <div>
                <img src={usuario} alt="usuario" />
                <p>MI PERFIL</p>
             </div>
           
             <div>
                <div>
                    <img src="" alt="usuario" />
                    <h2>mis datos</h2>
                    <p>datos verificados</p>
                </div>
                <div>
                    <img src="" alt="seguridad" />
                    <h2>seguridad</h2>
                    <p>configura tu seguridad </p>
                </div>
                <div>
                    <img src="" alt="tarjeta" />
                    <h2>tarjetas</h2>
                    <p>gestiona tus targetas</p>
                </div>
                <div><img src="" alt="direcciones" />
                    <h2>direcciones</h2>
                    <p>modifica tu dirreccion o agrega una nueva</p></div>
                <div>
                    <img src="" alt="privacidad" />
                    <h2>privacidad</h2>
                    <p>gestiona tus datos personales</p>
                </div>
                <div>
                    <img src="" alt="comunicacion" />
                    <h2>comunicacion</h2>
                    <p>elige que tipo de informacion quieras resivir</p>
                </div>
             </div>
        </div>
    )
}