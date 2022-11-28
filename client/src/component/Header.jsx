import logo from '../assets/logo1.png'
import {React, useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import axios from 'axios';




export const Header = ()=>{
    const [usuario, setUsuario] = useState([]);
    const [tablaUsuario, setTablaUsuario] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    const peticionGet = async()=>{
    await axios.get('#')
        .then(Response=>{
            console.log(response.data);
            setUsuario(response.data);
            setTablaUsuario(response.data)
    }).catch(error=>{
        console.log(error);
    })
    }
    useEffect(() => {
        peticionGet();
    }, []);

    const handleChange=(e)=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value)
    }

    const filtrar =(terminoBusqueda)=>{
        var resultadosBusqueda = tablaUsuario.filter((elemento)=>{
            if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        });setUsuario(resultadosBusqueda);
    }
    return(
        <header className='header' id='header'>
            <div className='header-logo'>
              <Link to={'/'}> <img src={logo} alt="" /></Link> 
            </div>
            <div className='header-search'>
                <form action="">
                <input type="text" value={busqueda} placeholder='buscar'
                onChange={handleChange} /></form>
                <button className='header-icono'><FaSearch/></button>
            </div>
            <nav className='header-menu'>
                <ul>
                    <Link to={'/creatucuenta'}><li>crear tu cuenta</li></Link>
                    <Link to={'/Ingresar'}><li>ingresar</li></Link>
                    <Link to={'/miCuenta'}><li>mi cuenta</li></Link>

                </ul>
            </nav>
            <div className='header-icons'>
                <div className='icons'><Link to={'/carrito'}><FaShoppingCart/></Link></div>
            </div>
        </header>
    )
};