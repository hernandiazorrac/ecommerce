import {useState} from 'react';
import Swal from 'sweetalert2';
import './ItemCount.css';

function ItemCount({stock, initial}){
    const [num, setNum] = useState(initial);
    
    const sumar = () => {
        if(num < stock){
            setNum(num + 1);
        }else{
            Swal.fire({
                title: '¡Límite de stock!',
                text: 'No hay más stock disponible ☹',
                icon: 'warning',
                confirmButtonText: 'Dale'
            })
        }
    }

    const restar = () => {
        if(num > initial){
            setNum(num - 1);
        }
    }



    return(
        <div className='py-3'>
            <p>{stock > 1 ? `${stock} unidades disponibles` : `${stock} unidad disponible`}</p>
            <button className='btn btn-dark btn-sm addBtn' onClick={sumar}>+</button>
            <span className='justify-content-center px-3'>{num}</span>
            <button className='btn btn-dark btn-sm removeBtn' onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount;