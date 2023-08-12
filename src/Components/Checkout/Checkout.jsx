import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { collection, addDoc, updateDoc } from "firebase/firestore"
import { db } from "../../Firebase/config"
import { Link, Navigate } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore';


const Chekout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [ordenId, setOrdenId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.value]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        
        const orden = {
            cliente: values,
            item: cart.map(item => ({id: item.id, nombre: item.nombre, precio: item.precio_venta, cantidad: item.cantidad})),
            total: totalCompra(),
            fyh: new Date()
        }
        
        console.log(orden)

        orden.item.forEach(item => {
            const docRef = doc(db, "productos", item.id)
            getDoc(docRef)
                .then((doc) => {
                    const stock = doc.data().stock

                    if (stock >= item.cantidad) {
                        updateDoc(docRef, {
                            stock: stock - item.cantidad
                        })
                    } else {
                        alert("No hay Stock de" + item.nombre)
                    }
                })
            })
        }
        // const ordenRef = collection(db, "ordenes")

        // addDoc(ordenRef, orden)
        //     .then((doc) => {
        //         console.log(doc.id)
        //         vaciarCarrito()
        //         setOrdenId(doc.id)
        //     })

    if (ordenId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente</h2>
                <hr />
                <p>Tu numero de orden es: <strong>{ordenId}</strong></p>
                <Link to="/" className="btn btn-warning">Ir al inicio</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                onChange={handleInputChange}
                value={values.nombre}
                type="text"
                className="form-control my-2"
                placeholder="Nombre"
                name="nombre"
                />

                <input
                onChange={handleInputChange}
                value={values.direccion}
                type="text"
                className="form-control my-2"
                placeholder="Direccion"
                name="direccion"
                />

                <input
                onChange={handleInputChange}
                value={values.email}
                type="email"
                className="form-control my-2"
                placeholder="Email"
                name="email"
                />

                <button className="btn btn-warning btn-outline-success">Enviar</button>
            </form>
        </div>
    )
}

export default Chekout