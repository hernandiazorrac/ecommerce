import './ItemListContainer.css'
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

function ItemListContainer({ greetings }){

    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { catId }  = useParams();
    

    useEffect(() => {
        // if(catId === undefined){
                const db = getFirestore()
                const itemsRef = collection(db, "items")
                getDocs(itemsRef).then((snapshot) => {
                        if(snapshot){
                            setInfo(snapshot.docs.map((doc) => doc.data()))
                            setIsLoading(false)
                        }
                })


                // fetch('/data/productos.json', {
                //     headers : { 
                //       'Content-Type': 'application/json',
                //       'Accept': 'application/json'
                //      }
                //     })
                //     .then(res => res.json())
                //     .then(data => setInfo(data))
                    // setIsLoading(false)
        // }else{
        //     setTimeout(() => {
        //         fetch('/data/productos.json', {
        //             headers : { 
        //               'Content-Type': 'application/json',
        //               'Accept': 'application/json'
        //              }
        //             })
        //             .then(res => res.json())
        //             .then(data => setInfo(data.filter(i => i.categoria.toUpperCase() === catId.toUpperCase())))
        //             setIsLoading(false)
        //     }, 500);
        // }
        
    }, [catId])

    return(
        <>
            {catId !== undefined && <h2 className="productosTitulo mt-5 text-uppercase">{catId}</h2>}
            <h2 className="productosTitulo mt-5 text-uppercase pb-4">{greetings}</h2>
            
            {isLoading && <p>Cargando...</p>}
            {console.log(info)}
            <ItemList productos={info}/>
            
        </>
    );
}

export default ItemListContainer;