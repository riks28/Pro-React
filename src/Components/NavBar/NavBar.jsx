import logo from "../../assets/logo.png"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

export const NavBar = () => {

  let contador = 0

  return (
    <header className="header">
      <div className="header_container">
        <nav>
          <ul>
            <p className="cant_prod_carrito">{contador}</p>
            <CartWidget />
            <img className="logo" src={logo} alt="logo-romdeco" /><img />
            <Link className="link_navbar" to="/">Inicio</Link>
            <Link className="link_navbar" to="/Productos/platos y bowls">platos y bowls</Link>
            <Link className="link_navbar" to="/Productos/almacenaje">almacenaje</Link>
            <Link className="link_navbar" to="/Productos/CUBIERTOS">Cubiertos</Link>
            <Link className="link_navbar" to="/Productos/Copas y Tazas">Copas y Tazas</Link>
            <Link className="link_navbar" to="/Productos/FLOREROS">Floreros</Link>
            <Link className="link_navbar" to="/Productos/INDIVIDUALES">Individuales</Link>
            <Link className="link_navbar" to="/QuienesSomos">Quienes Somos</Link>
            <Link className="link_navbar" to="/Contacto">Contacto</Link>
          </ul>
        </nav>

      </div>

    </header>

  )

}

{/* <a className="navbar">Inicio</a>
<a className="navbar">Productos</a>
<a className="navbar">Quienes Somos</a>
<a className="navbar">Contacto</a> */}