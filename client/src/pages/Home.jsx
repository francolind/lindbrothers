import { Banner } from '../component/Banner';
import { Footer } from '../component/Footer';
import {Header} from '../component/Header'
import { LogoProduct } from '../component/LogoProduct';
import { Main } from '../component/Main';
import { Maxcard } from '../component/Maxcard';



export const Home = ()=>{
    return(
        <>
            <Header/>
            <Banner/>
            <LogoProduct/>
            <Main/>
            <Maxcard/>
            <Footer/>
        </>

    )
};