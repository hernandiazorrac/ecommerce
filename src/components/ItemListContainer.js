import './ItemListContainer.css'
import ItemList from './ItemList';

function ItemListContainer(){
    return(
        <section >
            <div className="productosTitulo mt-5 text-uppercase pb-2">
            <h2>Destacados</h2>
            </div>

            <ItemList />
        </section>
    );
}

export default ItemListContainer;