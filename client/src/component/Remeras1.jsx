import tendencia from '../assets/tendencia.png'

export  const Remeras1 = () => {
    return (
        <div className='remeras1'>
            <div className='remeras1-img'><img src={tendencia} alt="" /></div>
            <div className='remeras1-button'><button>compra ya</button></div>
        </div>
    );
};

export default Remeras1;