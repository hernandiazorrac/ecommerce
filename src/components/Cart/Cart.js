import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext"
import FormOrder  from "../Orders/FormOrder/FormOrder"
import './Cart.css'

const Cart = () => {
    const { items, removeItem, clearCart, areYouSureDelete, areYouSureClear, getTotal } = useContext(CartContext);

    if (items.length === 0) {
        return (
            <div>
                <p>No hay productos en el carrito.</p>
                <p><Link to="/ecommerce">Volver a home</Link></p>
                
            </div>
        )
    }else{
        return(
            <div>
                
                <h2 className="border-bottom p-3">Productos en tu carrito:</h2>
                {
                    items.map(item =>(
                    <div className="p-2" key={item.id}>
                            <img className="img-fluid cartItemImg" src={item.img} alt={item.descripcion} />
                            <h4 className="">{item.marca} - {item.modelo} (x{item.cant})</h4>
                            <p>{item.descripcion}</p>
                            <p>${Intl.NumberFormat("es-AR").format(item.precio)}</p>
                            <button className="btn btn-warning btn-sm" onClick={() => {removeItem(item.id); areYouSureDelete(); }}>Borrar producto</button>
                        </div>
                    ))
                }

                <div className="border p-4 my-5">
                <h4 className="">Total: ${getTotal()}</h4>
                <div className="btn btn-danger btn-sm" onClick={() => {clearCart(); areYouSureClear();}}>Vaciar carrito</div>
                </div> 
                <div className="mb-4 mx-4">Rellená el formulario para completar el proceso de compra.</div>
                <FormOrder />          
            </div>
        )
    }
}

export default Cart