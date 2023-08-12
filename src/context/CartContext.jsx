import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init)

    const addCart = (item) => {
        setCart([...cart, item])
    }
    console.log(addCart)

    const quitarDelCArrito = (id) => {
        setCart( cart.filter((item) => item.id !== id ) )
    }

    const isInCArt = (id) => {
        return cart.some((item) => item.id === id)
    }

    const totalCompra = () => {
        return cart.reduce((acumulador, item) => acumulador + item.precio_venta * item.cantidad, 0)
    }

    const totalCantidad  = () => {
        return cart.reduce((acumulador, item) => acumulador + item.precio_venta * item.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

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