import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './compoments/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './compoments/footer/Footer'
import FormCategoria from './compoments/categorias/formCategoria/FormCategoria'
import DeletarCategoria from './compoments/categorias/deletarCategoria/DeletarCategoria'
import ListaCategoria from './compoments/categorias/listaCategoria/ListaCategoria'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App