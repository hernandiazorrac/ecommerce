import { useEffect, useState } from "react";
import  ItemDetail  from "./ItemDetail";
import { useParams } from "react-router-dom";
import { GetItemFiltered } from "../../services/firestore";


export const ItemDetailContainer = () => {
    const {productoId} = useParams();
    const [datos, setDatos] = useState({})

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        GetItemFiltered(productoId)
        .then((i) => {
            setDatos(i)
            setIsLoading(false)
        })
    }, [productoId]);


    return(
        <>
        {isLoading ? <p>Cargando...</p> : <ItemDetail {...datos} />}
        </>
    )
}