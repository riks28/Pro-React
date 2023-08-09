import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/pedirDatos"


const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        
        pedirDatos()
            .then(resp => setProductos(resp))
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return { productos, loading }

}