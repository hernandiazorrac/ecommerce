import { useContext } from "react";
import { ClearButton } from "../Buttons/ClearButton/ClearButton";
import { CartContext } from "../Context/CartContext";
import { EmptyCart } from "../EmptyCart/EmptyCart";
import FormOrder from "../Orders/FormOrder/FormOrder"
import './Cart.css';
import '../Buttons/DeleteButton/DeleteButton.css';

const Cart = () => {
    const { items, removeItem, getTotal } = useContext(CartContext);

    if (items.length === 0) {
        return (
              <EmptyCart />
            )
    }else{
        return(<>
            <div className="cartContainer">
                <h2 className="py-4 border-bottom cartTitle">Productos en tu carrito</h2>
                {items.map(item =>(
                        <div key={item.id} className="px-3 py-2">
                            <div className="card cartCard p-4">
                            <div className="row g-0" >
                                <div className="col-md-4 col-sm-4 col-3">
                                <img src={item.img} draggable="false" className="img-fluid border rounded-circle cartItemImg" alt={item.descripcion} />
                                </div>
                                <div className="col-md-8 col-sm-8 col-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.marca} - {item.modelo} (x{item.cant})</h5>
                                    <p className="card-text text-truncate cardDescription"><small>{item.descripcion}</small></p>
                                    {item.cant === 1 ? <p className="card-text"><small className="text-muted"><strong>${Intl.NumberFormat("es-AR").format(item.precio)}</strong></small></p> : <p className="card-text"><small className="text-muted"><strong>${Intl.NumberFormat("es-AR").format(item.precio)} (${Intl.NumberFormat("es-AR").format(item.precio * item.cant)})</strong></small></p>}
                                    
                                    <button className="btnDelete" onClick={ () => {removeItem(item.id)}}>
                                        <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </div>
                                        </div>
                                        <span>Eliminar</span>
                                    </button>
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                    ))}

                <div className="total py-3">
                Total: <span className="price">${getTotal()}</span>
                </div>
                <div className="mb-5">
                    <ClearButton />
                </div>
            </div>
                <FormOrder />
            </>
        )
    }
}


export default Cart;

