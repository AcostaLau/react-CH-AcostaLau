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
          <ItemListContainer />
          <ItemDetailCointainer/>
        </div>      
      </body>
    </div>
  );
}


//export default App;  ===> de esta forma se utilizaria si fuese una arrow function, como lo hice en NavBar
