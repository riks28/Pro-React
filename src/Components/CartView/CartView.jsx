import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import trash from "../../assets/trash.jpg"



const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, quitarDelCArrito } = useContext(CartContext)

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
                        <button onClick={() => quitarDelCArrito(item.id)} className="btn btn-danger    " ><img src="../../assets/trash.jpg" alt="" /></button>
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











            // <table class="table table-hover text-center "></table>
            // {/* <p>{cart.length}</p> */}
            // <button type="submit" onClick={()=>window.location="/"}>Continuar Compra
            // </button>