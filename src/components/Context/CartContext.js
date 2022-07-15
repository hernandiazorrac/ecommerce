import { createContext, useState } from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const found = items.find(item => item.id === id)
        return found;
    }

    const addItem = (id, cant) => {
        isInCart(id) ? setItems(items.map((product) => {
            if(product.id === id){
                product.cant += cant;
            }
            return product;
        })) : setItems([...items, {cant: cant}])
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setItems([])
    }


    return(
        <CartContext.Provider value={{ items, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
