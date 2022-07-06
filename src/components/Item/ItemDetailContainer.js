import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

function ItemDetailContainer(){

    const params = useParams();
    const [datos, setDatos] = useState({})

    useEffect( () => {
        fetch('../productos.json')
            .then(res => res.json())
            .then(data => setDatos(data.find((producto) => producto.id === parseInt(params.productoId))))
            .then(console.log(datos))
            .catch(err => console.log(err))
    },[]);

    return(
        <>
            <ItemDetail product={datos} />
        </>
    )
}

export default ItemDetailContainer;