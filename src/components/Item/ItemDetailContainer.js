import { useEffect, useState } from "react";
import  ItemDetail  from "./ItemDetail";
import { useParams } from "react-router-dom";
import { GetItemFiltered } from "../../services/firestore";


export const ItemDetailContainer = () => {
    const {productoId} = useParams();
    const [datos, setDatos] = useState({})

    useEffect(() => {
        GetItemFiltered(productoId)
        .then((i) => {
            setDatos(i)
        })
    }, [productoId]);


    return(
        <>
            <ItemDetail {...datos} />
        </>
    )
}