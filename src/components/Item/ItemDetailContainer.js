import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(){
    const [product, setProduct] = useState([])
    const id = 5;

    useEffect(() => {
        setTimeout( //emula retraso de 1s hasta cargar los elementos
            () => {
                fetch('productos.json', {
                    headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => setProduct(data))
                    .catch(err => console.log(err))
                }, 1000)
    }, []);

    return(
        <>
            {product.length !==0 && <ItemDetail productId={id} />}
        </>
    )
}

export default ItemDetailContainer;