import { useEffect, useState } from "react";
import  ItemDetail  from "./ItemDetail";
import { useParams } from "react-router-dom";
import { GetItemFiltered } from "../../services/firestore";
import Loader from "../Loader/Loader";


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
        <div className="py-5">
            {isLoading ? <Loader /> : <ItemDetail {...datos} />}
        </div>
    )
}