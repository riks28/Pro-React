import { useState } from 'react';
import { useEffect } from 'react';
import { pedirDatos } from '../helpers/pedirDatos';
import ItemList from '../../Components/ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then(res => {
                if (categoryId) {
                    setProductos(res.filter(prod => prod.categoria === categoryId))
                } else { 
                    setProductos(res) 
                }
            })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos} />
            }
        </div>
    )
}

export default ItemListContainer