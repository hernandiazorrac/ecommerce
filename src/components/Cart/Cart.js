import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext"
import './Cart.css'

const Cart = () => {
    const { items, removeItem, clearCart, areYouSureDelete, areYouSureClear } = useContext(CartContext);

    

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
                <div>
                    <div className="p-2 " key={item.id}>
                        <img className="img-fluid cartItemImg" src={item.img} />
                        <h3 className="">{item.marca} - {item.modelo} (x{item.cant})</h3>
                        <p>{item.descripcion}</p>
                        <p>${item.precio}</p>
                        <button className="btn btn-warning btn-sm" onClick={() => {removeItem(item.id); areYouSureDelete(); }}>Borrar producto</button>
                    </div>
                </div>
                    
                ))
            }
            <div className="mt-2 btn btn-danger btn-sm" onClick={() => {clearCart(); areYouSureClear();}}>Vaciar carrito</div>
        </div>
    )
}
}

export default Cart