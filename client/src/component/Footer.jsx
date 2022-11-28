import { FaFacebookF, FaInstagram,FaTiktok,FaYoutube,FaTwitter } from "react-icons/fa";
import logo from '../assets/logo1.png'
import { Link } from "react-router-dom";



export const Footer = ()=>{
    return(
        <footer className='footer'>
            <div className='footer-logo'>
               <a href="#header"> <img src={logo} alt="" /></a>
            </div>
            <div className="footer-link">
                    <ul>
                        <a href="#header"><li>Home</li></a>
                        <Link to={'/carrito'}> <li>carrito de compra</li></Link>
                        <li>terminos y condiciones</li>
                        <li>privacidad y datos personales</li>
                        <Link to={'/miCuenta'}><li>mi cuenta</li></Link>
                    </ul>
            </div>
            <div className="footer-social">
            <h2>redes sociales</h2>
                        <div><FaFacebookF/> <FaInstagram/> <FaTiktok/> <FaYoutube/> <FaTwitter/>  </div>
            </div>
           
        </footer>
    )
}