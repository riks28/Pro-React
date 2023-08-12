import carrito from '../../assets/carrito.png'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return (
        <div>
        <Link to="/cart">

            <img className='carrito' src={carrito} alt="imagen-carrito" />
            <span className='contador'>{totalCantidad()}</span>

        </Link>

        </div>
    )
}