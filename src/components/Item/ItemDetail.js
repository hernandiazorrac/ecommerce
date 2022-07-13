import { useContext, useState, } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import ItemCount from "./ItemCount"

export const ItemDetail = ({
    marca, modelo, stock, precio, img, descripcion, item, id
}) => { 
    // const {addToCart} = useContext(CartContext)
    const [add, setAdd] = useState(false)

    const { addItem } = useContext(CartContext)

    const onAdd = () => {
        setAdd(!add)
    }

    return(
        <>
            <img src={img} alt={'lorem'}/>
            <h2>{marca} - {modelo}</h2>
            <h3>Precio: ${precio} </h3>
            <h4>{descripcion}</h4>

             {
                add ? <span className="d-block border-top p-2">¡Añadido al carrito!</span> : <ItemCount key={id} item={item} stock={stock} initial={0} onAdd={addItem}/>
            }
                <Link to="/cart" className="btn btn-success btn-sm">Finalizar compra</Link>

        </>
    )
}

export default ItemDetail