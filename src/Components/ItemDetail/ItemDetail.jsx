import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({item}) => {

    return (
        <div className="item-detail">
            <h2>{ item.nombre }</h2>
            <img src={ item.img } alt={ item.nombre } />
            <p>Precio: $<strong>{ item.precio_venta }</strong></p>
            <p><strong>{item.descripcion}</strong></p>
            

            <ItemCount 
                max={item.stock}
            />
        </div>
    )
}

export default ItemDetail