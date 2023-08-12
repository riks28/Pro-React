import logo from "../../assets/logo.png"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

export const NavBar = () => {

  

  return (
    <header className="header">
      <div className="header_container">
        
        <nav>
            
            <CartWidget />
            <img className="logo" src={logo} alt="logo-romdeco" /><img />
            <Link className="link_navbar" to="/Home">Home</Link>
            <Link className="link_navbar" to="/">Todos los Productos</Link>
            <Link className="link_navbar" to="/Productos/Platos & Bowls">Platos y Bowls</Link>
            <Link className="link_navbar" to="/Productos/almacenaje">Almacenaje</Link>
            <Link className="link_navbar" to="/Productos/CUBIERTOS">Cubiertos</Link>
            <Link className="link_navbar" to="/Productos/Copas y Tazas">Copas y Tazas</Link>
            <Link className="link_navbar" to="/Productos/FLOREROS">Floreros</Link>
            <Link className="link_navbar" to="/Productos/INDIVIDUALES">Individuales</Link>
            <Link className="link_navbar" to="/Contacto">Contacto</Link>
          
        </nav>

      </div>

    </header>

  )

}
