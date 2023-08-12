import { Link } from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer"


const Home = () => {

    return (
        <div className="link_nav">
            <div className="bienvenida">

                <hr />
                <h2>BIENVENIDOS A ROM DECO DESING <nav></nav> - SU ESPACIO DE DISEÑO -</h2>
                <hr />
            </div>
            <div className="botonBienvenida">
                <Link to="/Productos" element={<ItemListContainer />}><button className="btn btn-light btn-outline-success" type="submit">NUESTROS PRODUCTOS</button></Link>

            </div>
            <div>
                <img className="img_quienes" src="https://d2r9epyceweg5n.cloudfront.net/stores/001/921/948/themes/common/logo-745804560-1640333788-bc35b054766def0e20aba640bd55960b1640333789-480-0.png?0" alt="" />
            </div>
        </div>
    )
}

export default Home