import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetAllItems, GetItemsByCategory } from '../../services/firestore';
import Loader from '../Loader/Loader';

function ItemListContainer({ greetings }){

    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { catId }  = useParams();
    

    useEffect(() => {
        if(!catId){
            GetAllItems().then((data) => {
                    setInfo(data)
                    setIsLoading(false)
            })
        }else{
            GetItemsByCategory(catId).then((data) => {
                setInfo(data)
                setIsLoading(false)
            })
        }
        }, [catId])

        
    return(
        <>
            {catId ? <h2 className="productosTitulo mt-5 pb-4 text-uppercase">{catId}</h2> : <h2 className="productosTitulo mt-5 text-uppercase pb-4">{greetings}</h2>}
            {isLoading && <Loader/>}
            <ItemList productos={info}/>
            
        </>
    );
}

export default ItemListContainer;