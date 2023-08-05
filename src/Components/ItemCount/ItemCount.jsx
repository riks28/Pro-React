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
            <button className="btn btn-light">Agregar al Carrito</button>
            <br />
            <button onClick={handlerResta} className="btn btn-outline-dark">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handlerSuma} className="btn btn-info">+</button>
        </div>

    )
    
}

export default ItemCount