import {useState} from 'react';
import Swal from 'sweetalert2';
import './ItemCount.css';

function ItemCount({item, stock, initial, onAdd}){
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
        <div className='py-1 itemCountContainer'>
            
                <div className='mt-3'>
                <button className='btn btn-dark btn-sm removeBtn' onClick={restar}>-</button>
                <span className='justify-content-center px-3'>{num}</span>
                <button className='btn btn-dark btn-sm addBtn' onClick={sumar}>+</button>
            </div>
            
            {  num > 0 ?
                <button className="d-flex mt-3 mb-2 btn btn-warning btn-sm addToBtn" onClick={() => onAdd({item}, num)}>Agregar al carrito
                </button>
                :
                <button className="d-flex mt-3 mb-2 btn btn-warning btn-sm addToBtn disabled">Agregar al carrito
                </button>
            }
            
            <span className='detailStockDisponible text-muted'>{stockActual > 1 ? `${stockActual} unidades disponibles` : `${stockActual} unidad disponible`}</span>

        </div>
        </>
    )
}

export default ItemCount;