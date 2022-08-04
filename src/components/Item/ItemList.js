import Item from "./Item";

function ItemList({ productos }){
    // mapea las cards con los datos del json
    return( 
        <div className='catalogo justify-content-center mx-auto row gx-5 py-5'>
            {productos.map(i => <Item 
            product={i.marca} 
            model={i.modelo} 
            price={i.precio} 
            category={i.categoria} 
            key={i.id} 
            stock={i.stock} 
            img={i.img} 
            description={i.descripcion} 
            id={i.id}
            />)} 
        </div>
    )
}

export default ItemList;