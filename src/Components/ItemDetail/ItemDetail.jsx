import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ({ item }) => {
    const { addCart, isInCArt } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)


    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        addCart(newItem)
    }

    return (
        <div className="item-detail">
            <h2>{item.nombre}</h2>
            <img src={item.img} alt={item.nombre} />
            <p>Precio: $<strong>{item.precio_venta}</strong></p>
            <p><strong>{item.descripcion}</strong></p>

            {
                isInCArt(item.id)
                    ? <Link className="btn btn-info" to="/cart">Finalizar Compra</Link>
                    : <ItemCount
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }   
        </div>
    )
}

export default ItemDetail