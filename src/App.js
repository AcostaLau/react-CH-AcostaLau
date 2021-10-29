import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './app.css'
import { Carousels } from './components/Carousels';
import { ItemDetailCointainer } from './components/ItemDetailCointainer';


// como es una function normal el export default puede ir al inicio.
// si fuera una arrow deberia ir al final como el la linea 17
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
        <Carousels/>
          {/* Productos */}
        <h1 className= 'tituloMain'>Nuestros Productos</h1>
        <div className = 'contenedorArticulos' >
          <Router>
            <Switch>

              <Route exact path='/' component={<ItemListContainer />}/> {/* El route me crea la coneccion entre el componente y la ruta*/} 
              <Route exact path='/detalle' component={<ItemDetailCointainer/>}/> 
              {/*exact = nos lleva a la ruta exacta
                path: es el nombre por el cual vamos a navegar
                component: vamos a declarar el componennte*/}
              
            </Switch>
          </Router>
          
        </div>      
      </body>
    </div>
  );
}


//export default App;  ===> de esta forma se utilizaria si fuese una arrow function, como lo hice en NavBar
