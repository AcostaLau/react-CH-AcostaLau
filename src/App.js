import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';


// como es una function normal el export default puede ir al inicio.
// si fuera una arrow deberia ir al final como el la linea 17
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer/>
      </header>
    </div>
  );
}



export const ItemListContainer = () => {
  return(
    <div>
      <h1>Hola bienvenidos a la tienda</h1>

    </div>
  )
}

//export default App;  ===> de esta forma se utilizaria si fuese una arrow function, como lo hice en NavBar
