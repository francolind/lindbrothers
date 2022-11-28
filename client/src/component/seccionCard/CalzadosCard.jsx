import '../../styles/calzadosCard.css'
import zapatilla from '../../assets/zapatilla.jpg'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


export  const CalzadosCard = ()=>{
    const [calzados, setCalzados] = useState([]);

    useEffect(()=>{
        const fetchCalzado = async ()=>{
            const {data} = await axios.get("/api/products");
            setCalzados(data);
        };fetchCalzado();
        console.log(setCalzados());
    },[])


    return(
        <div className="calzados-card">
            <div className="calzados-card-container">
                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>

                <div className="calzados-card-principal">
                    <img src={zapatilla} alt="" />
                    <p>nombres</p>
                    <p>marca-modelo</p>
                    <p>precio</p>
                    <div><p>favorito</p></div>
                </div>
            </div>
        </div>
    )
  };