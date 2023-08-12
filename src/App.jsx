import { NavBar } from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Home from './Components/Home/Home'
import Contacto from './Components/Contacto/Contacto'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Footer from './Components/Footer/Footer'
import './App.css'
import { CartProvider } from './Context/CartContext'
import CartView from './Components/CartView/CartView'
import Checkout from './Components/Checkout/Checkout'

// import { SearchProvider } from './context/SearchContext';
// import SearchBar from './context/SearchContext';

function App() {



  return (


      <CartProvider>

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/Home" element={<Home/>} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Productos/:categoryId" element={<ItemListContainer />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Cart" element={<CartView />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </CartProvider>



  )
}

export default App
