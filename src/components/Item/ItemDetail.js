function ItemDetail(props){

    const producto = props.productData;

    return(
        <>
            <h2>ID: {producto.id} </h2>
        </>
    )
}

export default ItemDetail;