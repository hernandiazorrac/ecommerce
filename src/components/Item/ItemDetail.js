import ItemCount from "./ItemCount"

export const ItemDetail = ({
    marca, modelo, stock, precio, img, descripcion
}) => {

    return(
        <>
            <img src={img}/>
            <h2>{marca} - {modelo}</h2>
            <h3>Precio: ${precio} </h3>
            <h4>{descripcion}</h4>
            <p>Stock disponible: {stock} unidades.</p>

            <ItemCount stock={stock} initial={1}/>
        </>
    )
}