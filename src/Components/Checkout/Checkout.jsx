import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { collection, getDocs, addDoc, updateDoc, doc, getDoc, documentId, writeBatch, query, where } from "firebase/firestore"
import { db } from "../../Firebase/config"
import { Link, Navigate } from "react-router-dom"


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

    const handleSubmit = async (e) => {
        e.preventDefault()


        const orden = {
            cliente: values,
            item: cart.map(item => ({ id: item.id, nombre: item.nombre, precio: item.precio_venta, cantidad: item.cantidad })),
            total: totalCompra(),
            fyh: new Date()
        }

        console.log(orden)
        console.log(cart.map(item => item.id))


        const batch = writeBatch(db)

        const ordenRef = collection(db, "productos")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

        const productos = await getDocs(q)
        const sinStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                sinStock.push(item)
                alert("No hay suficiente cantidad en el inventario para realizar esta venta.")
            }
        })
        
        if (sinStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(ordenRef, orden)

            vaciarCarrito()
            setOrdenId(doc.id)
        } else {
            alert("Hay productos sin Stock")
            console.log(sinStock)

        }

        // const ordenRef = collection(db, "ordenes")

        // addDoc(ordenRef, orden)
        //     .then((doc) => {
        //         console.log(doc.id)
        //         vaciarCarrito()
        //         setOrdenId(doc.id)
        //     })
    }

    if (ordenId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente</h2>
                <hr />
                <p>Tu numero de orden es: <strong>{ordenId}</strong></p>
                <Link to="/Home" className="btn btn-warning">Ir al inicio</Link>
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