import { clases } from "../helpers/utils"
import { Link } from "react-router-dom"


const ItemCount = ({max, cantidad, setCantidad, agregar}) => {
    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    return (
        <div>
            <button 
                onClick={handleRestar} 
                className={ clases(
                    "btn",
                    "mx-3",
                    "btn-outline-danger",
                    cantidad === 5 && "boton-5",
                    cantidad === 1 ? "btn-outline-danger" : "btn-outline-danger"
                )}
                disabled={cantidad === 1}> - </button>

            <span className="btn btn-mx-2">{cantidad}</span>

            <button 
                onClick={handleSumar} 
                className={cantidad === max ? "btn mx-2 btn-danger" : "btn mx-3 btn-light btn-outline-success"}
                disabled={cantidad === max}
            >
                +
            </button>

            <br/>
            <Link to="/" className="btn btn-secondary mx-2">Ir al inicio</Link>
            <button onClick={agregar} className="btn btn-light my-3 btn-outline-success">Agregar</button>
            
        </div>
    )
}

export default ItemCount