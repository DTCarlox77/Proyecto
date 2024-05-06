import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Páginas personalizadas.
import { ProductsPage } from './pages/ProductsPage';
import { ProductsForm } from './pages/ProductsForm';
import { ProductPage } from './pages/ProductPage';
import { Pagina } from './pages/Pagina';

// Componentes personalizados.
import { Navigation } from './components/Navigation'

function App() {

  return (
      <BrowserRouter>
        <Navigation/>
        <hr />

        <Routes>
          <Route path='/' element={ <ProductsPage/> }/>
          <Route path='/create' element={ <ProductsForm/> }/>
          <Route path='/product/:id' element={ <ProductPage/> }/>
          <Route path='/ejemplo' element={ <Pagina/> } />
        </Routes>
        
      </BrowserRouter>
  )
}

export default App
