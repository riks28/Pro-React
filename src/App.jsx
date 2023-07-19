import { NavBar } from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import QuienesSomos from './Components/QuienesSomos/QuienesSomos'
import Contacto from './Components/Contacto/Contacto'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import './App.css'


function App() {
  
  return (

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/Productos/:categoryId" element={<ItemListContainer />}/>
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/QuienesSomos" element ={<QuienesSomos />}/>
          <Route path="/Contacto" element={<Contacto />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      
  )
}

export default App
