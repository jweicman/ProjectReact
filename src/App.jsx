
import './App.css'
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext/CartProvider';
// import { Form } from './Components/Form/Form';
// import { Boton } from './Components/Boton';

function App() {

  return (
    <>      
    <BrowserRouter>
    <CartProvider>
      <div>   
        <Header/>   
        <Routes>
          <Route path="/" element={<ItemListContainer titulo={'Bienvenidos'}></ItemListContainer>}/>
          <Route path="/detail/:id" element={ <ItemDetailContainer/>}/>
        </Routes>
      {/* <Form /> */}
        <Footer/>
      </div>
      </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
