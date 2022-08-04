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
            {isLoading && <Loader/>}
            {catId ? <h2 className="productosTitulo py-4 text-uppercase border-bottom">{catId}</h2> : <h2 className="productosTitulo py-4 text-uppercase px-2 border-bottom">{greetings}</h2>}
            <ItemList productos={info}/>
            
        </>
    );
}

export default ItemListContainer;