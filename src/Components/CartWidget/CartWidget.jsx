import { useContext } from 'react'
import carrito from '../../assets/carrito.png'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart">
            <img className='carrito' src={carrito} alt="imagen-carrito" />
            <span>{totalCantidad()}</span>

        </Link>
    )
}