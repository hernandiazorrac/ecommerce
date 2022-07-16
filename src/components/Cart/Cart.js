import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext"
import './Cart.css'

const Cart = () => {
    const { items, removeItem, clearCart } = useContext(CartContext);

    

    if (items.length === 0) {
        return (
            <div>
                <p>No hay productos en el carrito.</p>
                <p><Link to="/ecommerce">Volver a home</Link></p>
            </div>
        )}else{

    return(
        <div>
            {
                items.map(item =>(
                    <div className="p-4" key={item.id}>
                        <img className="img-fluid cartItemImg" src={item.img} />
                        <h1>{item.marca} - {item.modelo} (x{item.cant})</h1>
                        <h3>{item.descripcion}</h3>
                        <h3>${item.precio}</h3>
                        <div className="btn btn-warning btn-sm" onClick={() => removeItem(item.id)}>Borrar producto</div>
                    </div>
                ))
            }
            <div className="mt-2 btn btn-danger btn-sm" onClick={() => clearCart()}>Vaciar carrito</div>
        </div>
    )
}
}

export default Cart