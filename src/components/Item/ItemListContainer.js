import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data';


function ItemListContainer({ greetings }){

    const [info, setInfo] = useState([]);
    const [ruta, setRuta] = useState(".")
    const { catId } = useParams();
    

    useEffect(()=>{
        catId ? setRuta("..") : setRuta(".");
    }, [catId])

    useEffect(() => {
        fetch(`${ruta}/productos.json`,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
            })

            .then(res => res.json())
            .then(data => catId ? setInfo(data.filter((i) => i.categoria === catId)) : setInfo(data))
    })

    // useEffect(() => {
    //     const getItem = new Promise((resolve) => {
    //         const myData = catId ? data.filter((i) => i.categoria === catId) : data;
    //         resolve(myData);
    //     });

    //     getItem.then((res) => {
    //         setInfo(res);
    //     })
    // }, [catId]);

    return(
        <>
            <h2 className="productosTitulo mt-5 text-uppercase pb-4">{greetings}</h2>
            <ItemList ruta={ruta} productos={info}/>
        </>
    );
}

export default ItemListContainer;