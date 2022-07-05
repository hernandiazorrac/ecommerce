
function ItemDetail(props){
    const producto = props.productId;
    return(
        <h2>Marca: {producto.marca}</h2>
    )
}

export default ItemDetail