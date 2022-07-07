import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../data/data'



function ItemListContainer({ greetings }){

    const [info, setInfo] = useState([]);
    const { catId } = useParams();


    useEffect(() => {
        const getItem = new Promise((resolve) => {
            const myData = catId ? data.filter((i) => i.categoria === catId) : data;
            resolve(myData);
        });

        getItem.then((res) => {
            setInfo(res);
        })
    }, [catId]);

    return(
        <>
            <h2 className="productosTitulo mt-5 text-uppercase pb-4">{greetings}</h2>
            <ItemList productos={info}/>
        </>
    );
}

export default ItemListContainer;