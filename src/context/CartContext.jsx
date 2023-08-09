import { createContext, useState } from "react";


export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addCart = (item) => {
        setCart([...cart, item])
    }

    const quitarDelCArrito = (id) => {
        setCart( cart.filter((item) => item.id !== id ) )
    }

    const isInCArt = (id) => {
        return cart.some((item) => item.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((acumulador, item) => acumulador + item.precio * item.cantidad, 0)
    }

    const totalCantidad  = () => {
        return cart.reduce((acumulador, item) => acumulador + item.precio, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addCart,
            isInCArt,
            totalCompra,
            vaciarCarrito,
            totalCantidad,
            quitarDelCArrito
        }}>
            {children}
        </CartContext.Provider>

    )
}