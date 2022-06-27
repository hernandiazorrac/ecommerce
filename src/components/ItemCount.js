import {useState} from 'react';
import Swal from 'sweetalert2';

function ItemCount({stock, initial, onAdd}){
    const [num, setNum] = useState(0);
    
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
        if(num > 0){
            setNum(num - 1);
        }
    }

    const agregado = () => {
        if(num > 1){
        console.log(`Se agregaron ${num} unidades al carrito.`)
        }else{
            console.log(`Se agregó ${num} unidad al carrito.`)
        }
    }

    return(
        <div>
            <p className='d-flex justify-content-center'>{num}</p>
            <p>{stock > 1 ? `${stock} unidades disponibles` : `${stock} unidad disponible`}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={agregado}>agregar al carrito</button>
        </div>
    )
}

export default ItemCount;