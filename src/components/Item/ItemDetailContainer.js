import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){

    const params = useParams();
    const [datos, setDatos] = useState([])

    useEffect( () => {
        fetch('../productos.json')
            .then(res => res.json())
            .then(data => setDatos(data.find((producto) => producto.productoId === parseInt(params.productoId))))
            .catch(err => console.log(err))
    },[]);

    return(
        <>
            <ItemDetail productData={datos} />
        </>
    )
}

export default ItemDetailContainer;