import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({})

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const found = items.some((item) => item.id === id)
        return found;
    }

    const addItem = (item, cant) => {
        isInCart(item.id) ? setItems(items.map((product) => {
            if(product.id === item.id){
                product.cant += cant;
            }
            return product;
        })) : setItems([...items, {...item, cant: cant}])
    }


    const removeItem = (id) => {
        areYouSureDelete()
        setItems(items.filter(item => item.id !== id))
    }

    const areYouSureDelete = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Estás por eliminar un producto del carrito.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Eliminar',
          }).then((result) => {
            if (result.isDismissed) {
                setItems(items)
            }else if (result.isConfirmed){
                Swal.fire({
                    title: 'Eliminado del carrito',
                    text: "Producto eliminado con éxito.",
                    icon: 'success',
            })
        }})
    }

    const areYouSureClear = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Estás por eliminar vaciar el carrito.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Vaciar',
          }).then((result) => {
            if (result.isDismissed) {
                setItems(items)
            }else if (result.isConfirmed){
                
                Swal.fire({
                    title: 'Vaciado',
                    text: "Carrito vaciado con éxito.",
                    icon: 'success',
            })
            clearCart()
        }})
    }

    const clearCart = () => {
        setItems([])
    }

    const getTotal = () => {
        let total = 0;
        items.forEach((item) => {
            total = total + item.cant * item.precio;
        });
        return Intl.NumberFormat("es-AR").format(total);
    }

    return(
        <CartContext.Provider value={{ items, addItem, removeItem, clearCart, areYouSureDelete, areYouSureClear, getTotal }}>
            {children}
        </CartContext.Provider>
    )
}
