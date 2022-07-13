import { createContext, useState } from "react";

export const CartContext = createContext({})

const {Provider} = CartContext


export const CartProvider = ({ defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue);
    const clearCart = () => {
        setCart([]);
    }

    const addToCart = (item, num) => {
        console.log({item})
        setCart([
            ...cart,
            {
                item: item,
                num: num
            }
        ])
    }

    const context = {
        clearCart,
        addToCart
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
}