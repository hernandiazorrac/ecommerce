import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext"

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
                    <div key={item.id}>
                        <h1>Producto: {item.name}</h1>
                        <h2>Cantidad: {item.cant}</h2>
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