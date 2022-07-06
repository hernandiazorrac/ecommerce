export const ItemDetail = ({
    marca, modelo, categoria, stock, precio, img, id, descripcion
}) => {

    return(
        <>
            <img src={img}/>
            <h2>{marca} - {modelo}</h2>
            <h3>Precio: ${precio} </h3>
            <h4>{descripcion}</h4>
            <p>Stock disponible: {stock} unidades.</p>
        </>
    )
}