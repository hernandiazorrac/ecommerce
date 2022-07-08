import {useState} from 'react';
import Swal from 'sweetalert2';
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}){
    const [num, setNum] = useState(initial);

    let stockActual = stock - num;
    
    const sumar = () => {
        if(num < stock){
            setNum(num + 1);
        }else{
            Swal.fire({
                title: '¡Límite de stock!',
                text: 'No hay más stock disponible ☹',
                icon: 'warning',
                confirmButtonText: 'Entendido'
            })
        }
    }

    const restar = () => {
        if(num > initial){
            setNum(num - 1);
        }
    }

    

    return(<>
        <div className='py-3'>
            <p>{stockActual > 1 ? `${stockActual} unidades disponibles` : `${stockActual} unidad disponible`}</p>
            <button className='btn btn-dark btn-sm removeBtn' onClick={restar}>-</button>
            <span className='justify-content-center px-3'>{num}</span>
            <button className='btn btn-dark btn-sm addBtn' onClick={sumar}>+</button>
            
            {  num > 0 ?
                <button className="d-flex mx-auto mt-3 btn btn-warning btn-sm" onClick={() => onAdd()}>Agregar al carrito
                </button>
                :
                <button className="d-flex mx-auto mt-3 btn btn-warning btn-sm disabled" onClick={() => onAdd()}>Agregar al carrito
                </button>
            }
        </div>
        </>
    )
}

export default ItemCount;