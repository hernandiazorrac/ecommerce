import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greetings }){

    const [info, setInfo] = useState([]);
    const { catId }  = useParams();
    

    useEffect(() => {
        if(catId === undefined){
            setTimeout(() => {
                fetch('/data/productos.json', {
                    headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                     }
                    })
                    .then(res => res.json())
                    .then(data => setInfo(data))
            }, 500);
        }else{
            setTimeout(() => {
                fetch('../data/productos.json', {
                    headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                     }
                    })
                    .then(res => res.json())
                    .then(data => setInfo(data.filter(i => i.categoria === catId)))
            }, 500);
        }
    }, [])

    return(
        <>
            {catId !== undefined && <h2 className="productosTitulo mt-5 text-uppercase">{catId}</h2>}
            <h2 className="productosTitulo mt-5 text-uppercase pb-4">{greetings}</h2>
            
                <ItemList productos={info}/>
            
        </>
    );
}

export default ItemListContainer;