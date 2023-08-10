import { Link } from "react-router-dom"


const ItemCard = ({ item }) => {

    return (
        <div className="col-3 m-2">
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} />
            
            <p>${item.precio_venta}.00</p>
            {item.precio > 10000 && <p><strong>Envio Gratis!</strong></p>}
            <Link to={`/detail/${item.id}`} className="btn btn-primary">Ver detalle del Producto</Link>
        </div>
        
    )
}

export default ItemCard