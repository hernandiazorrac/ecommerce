import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';


function ItemListContainer(){

    const [info, setInfo] = useState([])

    useEffect(() => {

                fetch('productos.json', {
                    headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                     }
                  })
                    .then((resp) => resp.json())
                    .then((data) => setInfo(data))

          });

    return(
        <section>
            <div className="productosTitulo mt-5 text-uppercase pb-4">
            <h2>Destacados</h2>
            </div>
            <ItemList productos={info}/>
        </section>
    );
}

export default ItemListContainer;