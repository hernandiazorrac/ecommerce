import { useContext, useState, } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import ItemCount from "./ItemCount"
import './ItemDetail.css'

export const ItemDetail = ({
    marca, modelo, stock, precio, img, descripcion, item, id, categoria
    }) => { 

    const [add, setAdd] = useState(false)

    const { addItem } = useContext(CartContext)


    const onAdd = (item, cant) => {
        setAdd(!add)
        addItem({id, marca, modelo, stock, precio, img, descripcion, item}, cant)
    }

    return(
        <>
            <div className="detailContainer container">
                <div className="imgContainer">
                <img src={img} alt={descripcion} className="imgDetail" draggable="false" />
                    
                </div>

                <div className="textContainer">
                    <h2 className="titleDetail">{marca} {modelo}</h2>
                    <h5 className="priceDetail text-muted">${Intl.NumberFormat("es-AR").format(precio)} </h5>
                    <h6 className="descriptionDetail text-muted pb-4 border-bottom">{descripcion}</h6>
                    
                    {
                        add ? <span className="d-block py-3">¡Producto añadido!</span> : <ItemCount key={id} item={item} stock={stock} initial={0} onAdd={onAdd}/>
                    }

                    {
                        add && <div><Link to="/cart" className="btn btn-success btn-sm">Ir al carrito</Link></div>
                    }
                </div>
            </div>
            

            

            

        </>
    )
}

export default ItemDetail