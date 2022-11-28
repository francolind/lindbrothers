import exclusivo from '../assets/exclusivo1.png'
import tshirt from '../assets/T-SHIRT1.png'
import disenio from '../assets/disenios.png'
import remeras from '../assets/remeras1.png'



export const Main = ()=>{
    return(
        <main className="main">
            <div className='main-container'>
                <img src={exclusivo} alt="" className='exclusivo'/>
                <img src={tshirt} alt="" className='tshirt'/>
                <img src={disenio} alt="" className='disenio'/>
            </div>
            <div className='main-remeras'>
                <img src={remeras} alt=""  className='remeras'/>
            </div>
            
        </main>
    )
}

{

/*main{
    width: 100%;
    display: flex;
    position: relative;
   
}
.main-container{
    width: 50%;
    height: 700px;
    background-color: #96dc62;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-top:100px;
    flex-direction: column;
}
.exclusivo{
    width: 50%;
}
.tshirt{
    width: 70%;
    padding-top: 50px;
}
.disenio{
    width: 70%;
    margin-top: 50px;
}
.main-remeras{
    width: 50%;
}
.remeras{
    position: absolute;
    left: 45%;
}
*/ }