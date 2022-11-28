import './App.css'
import {Home} from './pages/Home.jsx'
import {Routes, Route, Link} from "react-router-dom";
import { Calzados } from './pages/Calzados';
import { Creatucuenta } from './pages/Creatucuenta';
import { Ingresar } from './pages/Ingresar';
import { Carrito } from './pages/Carrito';
import { Abrigos } from './pages/Abrigos';
import { Equipaje } from './pages/Equipaje';
import { Relojes } from './pages/relojes';
import { Interior } from './pages/Interior';
import { Anteojos } from './pages/anteojos';
import { Pantalones } from './pages/Pantalones';
import { Camisas } from './pages/Camisas';
import { Deportiva } from './pages/Deportiva';
import { Remeras } from './pages/remeras';
import { Gorros } from './pages/Gorros';
import { Perfumes } from './pages/Perfumes';
import { MiCuenta } from './pages/miCuenta';


function App() {


  return (
      
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>  
          <Route path='/calzados' element={<Calzados/>}/>  
          <Route path='/creatucuenta' element={<Creatucuenta/>}/>  
          <Route path='/ingresar' element={<Ingresar/>}/>  
          <Route path='/carrito' element={<Carrito/>}/>  
          <Route path='/abrigos' element={<Abrigos/>}/>  
          <Route path='/equipaje' element={<Equipaje/>}/>  
          <Route path='/relojes' element={<Relojes/>}/>  
          <Route path='/interior' element={<Interior/>}/>  
          <Route path='/anteojos' element={<Anteojos/>}/>  
          <Route path='/pantalones' element={<Pantalones/>}/>  
          <Route path='/camisas' element={<Camisas/>}/>  
          <Route path='/deportiva' element={<Deportiva/>}/>  
          <Route path='/remeras' element={<Remeras/>}/>  
          <Route path='/gorros' element={<Gorros/>}/>  
          <Route path='/perfumes' element={<Perfumes/>}/>  
          <Route path='/miCuenta' element={<MiCuenta/>}/>  


          </Routes>
      </div>
      
  )
}

export default App
