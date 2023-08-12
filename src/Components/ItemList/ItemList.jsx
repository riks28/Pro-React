import ItemCard from "../ItemCard/ItemCard"


const ItemList = ({ productos }) => {

    return (
        <div className="prod_container">
            <hr />
            <h2>Rom Deco Desing<nav></nav> Nuestros Productos</h2>
            <hr />
            
            <div className="row">
                {
                    productos.map((prod) => 
                    <ItemCard key={prod.id} item={prod} />)
                }

            </div>
        </div>
    )
}

export default ItemList