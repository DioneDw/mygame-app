import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">MeuJogo</Link>
        </div>
        <div>
          <Link to="/cart">Carrinho</Link>
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
          <Link to="/signin">| Faça seu Login!</Link>
        </div>
      </header>
      <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
       </main>
      <footer className="row center">
        Todos os direitos reservados, Projeto desenvolvido para trabalho Banco de Dados 2- UFOP
      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
