import { data } from "../data/data";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {
    const params = useParams();
    const [datos, setDatos] = useState({})

    useEffect(() => {
        const getItem = new Promise((resolve) => {
            const myData = data.find((producto) => producto.id === parseInt(params.productoId));

            resolve(myData);
        })
        getItem.then((res) => {
            setDatos(res);
        })
    }, []);


    return(
        <>
            <ItemDetail {...datos} />
        </>
    )
}