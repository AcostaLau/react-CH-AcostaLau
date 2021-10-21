import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import './app.css'




// como es una function normal el export default puede ir al inicio.
// si fuera una arrow deberia ir al final como el la linea 17
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
          {/* Productos */}
        <h1 className= 'tituloMain'>Nuestros Productos</h1>
        <div className = 'contenedorArticulos' >

          <ItemListContainer titulo= 'Banana 1' imagen='https://www.apple.com/v/iphone/buy/h/images/overview/compare_iphone_13_pro__eh103ckbrwom_medium.jpg'/>

          <ItemListContainer titulo='Banana 2' imagen='https://www.apple.com/v/iphone/buy/h/images/overview/compare_iphone_13__ciafj2xeuyaa_medium.jpg'/>

          <ItemListContainer titulo='Banana 3' imagen='https://www.apple.com/v/iphone/buy/h/images/overview/compare_iphone_12__cylgkq31mbo2_medium.jpg'/>

          <ItemListContainer titulo='Banana 4' imagen='https://www.apple.com/v/iphone/buy/h/images/overview/compare_iphone_se__f45s203j9r2i_medium.jpg'/>
          
        </div>      
      </body>
    </div>
  );
}




//export default App;  ===> de esta forma se utilizaria si fuese una arrow function, como lo hice en NavBar
