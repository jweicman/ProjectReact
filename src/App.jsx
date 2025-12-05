
import './App.css'
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './Components/Cart/Cart';
import { ProductFormContainer } from './Components/adminComponents/ProductFormContainer/ProductFormContainer';
import { AdminLayout } from './layouts/AdminLayout';
import { RutaProtegida } from './Components/RutaProtegida/RutaProtegida';
import { MainLayout } from './layouts/MainLayout';
import { Login } from './Components/Login/Login';

// import { Form } from './Components/Form/Form';
// import { Boton } from './Components/Boton';

function App() {

  return (
    <>      
    <BrowserRouter>
    <CartProvider>
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<ItemListContainer titulo={'Bienvenidos'}></ItemListContainer>}/>
            <Route path="/category/:category" element={<ItemListContainer titulo={'Bienvenidos'}></ItemListContainer>}/>
            <Route path="/detail/:id" element={ <ItemDetailContainer/>}/>
            <Route path="/carrito" element={<Cart/>}/>
            <Route path="/productos" element={<ProductFormContainer/>} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Login/>}/>
            <Route path="alta-productos" 
            element={
            <RutaProtegida>
              <ProductFormContainer/>
            </RutaProtegida>
            }></Route>
          </Route>
          <Route path="/admin" element={<AdminLayout />} />
        </Routes>
        <Footer/>
      </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
