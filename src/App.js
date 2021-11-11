import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer';
import './app.css'
import { ItemDetailCointainer } from './components/ItemDetailCointainer';
import {NavBar} from './components/NavBar/NavBar';
import { Cart } from './components/cart/Cart'
import  CartContextProvider  from './components/context/CartContext';



// como es una function normal el export default puede ir al inicio.
// si fuera una arrow deberia ir al final como el la linea 17
export default function App() {
  return (
        <CartContextProvider>
            <Router>
              <div className="App">
                <header className="App-header">
                  <NavBar/>
                </header>

                <body>
                  <div className = 'contenedorArticulos' >
                    <Switch>
                      <Route exact path='/' component={ItemListContainer}/>
                      <Route exact path='/producto/:idProducto' component={ItemListContainer}/> {/* El route me crea la coneccion entre el componente y la ruta*/} 
                      <Route exact path='/detalle/:idProducto' component={ItemDetailCointainer}/>
                      <Route exact path='/cart' component={Cart}></Route>
                    </Switch>
                  </div>      
                </body>
              </div>
            </Router>
        </CartContextProvider>
        

    
  );
}


//export default App;  ===> de esta forma se utilizaria si fuese una arrow function, como lo hice en NavBar
