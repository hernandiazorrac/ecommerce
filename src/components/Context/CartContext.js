import { createContext, useState } from "react";

export const CartContext = createContext({})

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
