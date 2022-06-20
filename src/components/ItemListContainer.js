import './ItemListContainer.css'

function ItemListContainer(props){
    return(
        <div className="productosTitulo mt-5 text-uppercase border-bottom pb-2">
            <p>{props.greetings}</p>
            <h2>Destacados</h2>            
        </div>
    );
}

export default ItemListContainer;