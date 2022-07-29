import { useContext, useState, } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import ItemCount from "./ItemCount"
import './ItemDetail.css'

export const ItemDetail = ({
    marca, modelo, stock, precio, img, descripcion, item, id
}) => { 
    // const {addToCart} = useContext(CartContext)
    const [add, setAdd] = useState(false)

    const { addItem } = useContext(CartContext)

    

    const onAdd = (item, cant) => {
        setAdd(!add)
        addItem({id, marca, modelo, stock, precio, img, descripcion, item}, cant)
    }

    return(
        <>
            <img src={img} alt={descripcion} className="mb-3 mt-5 border imgDetail"/>
            <h2>{marca} - {modelo}</h2>
            <h3>Precio: ${Intl.NumberFormat("es-AR").format(precio)} </h3>
            <h5 className="p-3">{descripcion}</h5>
            

            {
                add ? <span className="d-block border-top p-2">¡Añadido al carrito!</span> : <ItemCount key={id} item={item} stock={stock} initial={0} onAdd={onAdd}/>
            }

            {
                add && <Link to="/cart" className="btn btn-success btn-sm">Finalizar compra</Link>
                
            }

        </>
    )
}

export default ItemDetail