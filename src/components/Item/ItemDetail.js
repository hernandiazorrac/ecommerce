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

    

    const onAdd = (item, cant) => {
        setAdd(!add)
        addItem({id, marca, modelo, stock, precio, img, descripcion, item}, cant)
    }

    return(
        <div className="">
            
            <img src={img} alt={descripcion} className="m-5 border"/>
            <h2>{marca} - {modelo}</h2>
            <h3>Precio: ${Intl.NumberFormat("es-AR").format(precio)} </h3>
            <h4>{descripcion}</h4>
            

            {
                add ? <span className="d-block border-top p-2">¡Añadido al carrito!</span> : <ItemCount key={id} item={item} stock={stock} initial={0} onAdd={onAdd}/>
            }

            {
                add && <Link to="/cart" className="btn btn-success btn-sm">Finalizar compra</Link>
                
            }

        </div>
    )
}

export default ItemDetail