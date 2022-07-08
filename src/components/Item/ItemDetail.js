import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

export const ItemDetail = ({
    marca, modelo, stock, precio, img, descripcion
}) => { 
    const [add, setAdd] = useState(false)
    
    const addToCart = () => {
        setAdd(!add)
}

    return(
        <>
            <img src={img}/>
            <h2>{marca} - {modelo}</h2>
            <h3>Precio: ${precio} </h3>
            <h4>{descripcion}</h4>

            {
                add ? <span className="d-block border-top p-2">¡Añadido al carrito!</span> : <ItemCount stock={stock} initial={0} onAdd={addToCart}/>
            }
            {
                add && <Link to="/cart" className="btn btn-success btn-sm">Finalizar compra</Link>
            }
        </>
    )
}