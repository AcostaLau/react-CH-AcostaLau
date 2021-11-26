import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';
import './app.css'
import { ItemDetailCointainer } from './components/ItemDetailCointainer';
import {NavBar} from './components/NavBar/NavBar';
import { Cart } from './components/cart/Cart'
import  CartContextProvider  from './components/context/CartContext';



export default function App() {
  return (
        <CartContextProvider>
            <Router>
              <div className="App">
                <header className="App-header">
                  <NavBar/>
                </header>

                <body>   
                    <Switch>
                      <Route exact path='/' component={ItemListContainer}/>
                      <Route exact path='/producto/:idProducto' component={ItemListContainer}/> {/* El route me crea la coneccion entre el componente y la ruta*/} 
                      <Route exact path='/detalle/:idProducto' component={ItemDetailCointainer}/>
                      <Route exact path='/cart' component={Cart}></Route>
                    </Switch>    
                </body>
              </div>
            </Router>
        </CartContextProvider>
        

    
  );
}

