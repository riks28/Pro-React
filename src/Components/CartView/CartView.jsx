import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import trash from "../../assets/trash.jpg"
import { Link } from "react-router-dom"



const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, quitarDelCArrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2 className="text-4x1">
                    No hay productos en el carrito
                </h2>
                <br />
                <Link to="/" className="btn btn-light">Ver Productos</Link>
            </div>

        )
    }

    return (
        <div className="container my-5">
            <h2>Esta es tu compra</h2>
            <hr />
            <hr />
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <img src={item.img} alt={item.nombre}></img>
                        <p>Precio: ${item.precio * item.cantidad}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <button onClick={() => quitarDelCArrito(item.id)} className="btn btn-danger"><img src="../../assets/trash.jpg" alt="" />Quitar</button>
                        <hr />
                        <hr />
                    </div>
                ))
            }
            <div>
                <h3>Total de la Compra: $ {totalCompra}</h3>
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default CartView


