import { useState, createContext } from "react";

export const CartContext = createContext({cart: []});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {item, quantity}]);
        } else {
            console.log("Producto agregado!")
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id);
        setCart(cartUpdated);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}