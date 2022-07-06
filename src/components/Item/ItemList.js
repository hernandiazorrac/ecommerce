import Item from "./Item";

function ItemList(props){
    // mapea las cards con los datos del json
    return( 
        <div className='catalogo justify-content-center mx-auto row py-5'>
            {props.productos.map(i => <Item product={i.marca} model={i.modelo} price={i.precio} category={i.categoria} key={i.id} stock={i.stock} img={i.img} description={i.descripcion} id={i.id}/>)} 
        </div>
    )
}

export default ItemList;