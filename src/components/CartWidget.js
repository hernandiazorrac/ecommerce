import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget(){
    return(
        <div className='cartWidget' style={{fontSize: "1.5em", color: 'grey', cursor: 'pointer'}}>
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
    );
}

export default CartWidget;