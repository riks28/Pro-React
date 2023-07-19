

const ItemDetail = ({item}) => {

    return (
        <div className="item-detail">
            <h2>{ item.nombre }</h2>
            <img src={ item.img } alt={ item.nombre } />
            <p><strong>Precio: $</strong>${ item.precio_venta }.00</p>
            <p>{item.descripcion}</p>
            <button className="btn btn-success">Agregar al Carrito</button>
        </div>
    )
}

export default ItemDetail