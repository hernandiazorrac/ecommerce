import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetAllItems, GetItemsByCategory } from '../../services/firestore';
import Loader from '../Loader/Loader';
import { Slider } from '../Slider/Slider';

function ItemListContainer({ greetings }){

    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [carouselLoading, setCarouselLoading] = useState(false)
    const { catId }  = useParams();
    

    useEffect(() => {
        if(!catId){
            GetAllItems().then((data) => {
                    setInfo(data)
                    setIsLoading(false)
                    setCarouselLoading(true)
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
            {!catId & carouselLoading ? <Slider /> : ""}
            {catId ? <h2 className="productosTitulo py-4 text-uppercase border-bottom">{catId}</h2> : <h2 className="productosTitulo py-4 text-uppercase px-2 border-bottom">{greetings}</h2>}
            {isLoading && <Loader/>}
            <ItemList productos={info}/>
        </>
    );
}

export default ItemListContainer;