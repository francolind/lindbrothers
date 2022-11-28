import anteojos from '../assets/card-anteojos.png'
import relojes from '../assets/card-relojes.png'
import perfumes from '../assets/card-perfumes.png'
import { Link } from 'react-router-dom'



export const Maxcard = ()=>{
    return(
        <section className='maxcard'>
            <div className='maxcard-card'>
               <Link to={'/anteojos'}> <img src={anteojos} alt="anteojos" /></Link>
            </div>
                <div className='maxcard-card'>
            <Link to={'/relojes'}>
                    <img src={relojes} alt="relojes y joyas" />
            </Link>
                </div>
            <div className='maxcard-card'>
               <Link to={'/perfumes'}> <img src={perfumes} alt="perfumes" /></Link>
            </div>
       
        </section>
    )
}