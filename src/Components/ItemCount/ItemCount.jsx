import { useState } from "react"



const ItemCount = ({max}) => {
    const [counter, setCounter] = useState(1)

    const handlerResta = () => {
        counter > 1 && setCounter (counter - 1)
    }
    const handlerSuma = () => {
        counter < max && setCounter (counter + 1)
    }



    return (
        <div>
            <hr />
            <button onClick={handlerResta} className="btn btn-outline-dark">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handlerSuma} className="btn btn-info">+</button>
            <span className="mx-4"> </span>
            <button className="btn btn-light">Agregar al Carrito</button>
            <hr />
            
        </div>

    )
    
}

export default ItemCount