import { useContext } from 'react'
import carrito from '../../assets/carrito.png'
import trash from '../../assets/trash.jpg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart"><a href="../CartView/CartView.jsx">
            <img className='carrito' src={carrito} alt="imagen-carrito" />
            <span>{totalCantidad()}</span>
        </a>

        </Link>
    )
}