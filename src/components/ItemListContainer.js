import { ItemList } from './ItemList'
import  '../css/itemContainer.css'







export const ItemListContainer = () => {
    return (
        <div className= 'contenedor'>     
               {/* llega ItemList con toda la data que el paso Item creando la card */}
            <ItemList/>        
        </div>
    )
}
