import { useEffect, useState } from "react";
import ItemCard from "./ItemCard"

function ItemList(){

    const [info, setInfo] = useState([])

    useEffect(() => {
        setTimeout( //emula retraso de 2seg hasta cargar los elementos
            () => {
                fetch('productos.json', {
                    headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                     }
                  })
                    .then((resp) => resp.json())
                    .then((data) => setInfo(data))
            }, 1000)
        
    });

    //mapea las cards con los datos del json
    return( 
        <div className='catalogo d-flex justify-content-center p-4'>
            {info.map(i => <ItemCard product={i.marca} model={i.modelo} price={i.precio} type={i.categoria} key={i.id} />)} 
        </div>
    )
}

export default ItemList;