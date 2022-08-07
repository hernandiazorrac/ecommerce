import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './CartWidget.css';

function CartWidget(){
    const { items } = useContext(CartContext)
    let itemsInCart = 0;

    items.map((item) => {
        itemsInCart = itemsInCart + item.cant;
        return itemsInCart;
    })

    return(
        <div className='cartWidget'>
            <div className="cartWidgetNumber mx-auto">
                {itemsInCart}
            </div>
        <FontAwesomeIcon icon={faCartShopping} className="p-2 mx-auto" />
        </div>
    );
}

export default CartWidget;