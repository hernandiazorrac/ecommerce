import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

function CartWidget(){
    const { items } = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.cant;
    })

    return(
        <div className='cartWidget d-flex'>
            <FontAwesomeIcon icon={faCartShopping} className="p-2" />

            <div className="cartWidgetNumber">
                {itemsInCart}
            </div>
        </div>
    );
}

export default CartWidget;