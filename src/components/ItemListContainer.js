import  '../css/itemContainer.css'
import { ItemList } from './ItemList'






export const ItemListContainer = () => {
    return (
        <div className= 'contenedor'>     
               {/* llega ItemList con toda la data que el paso Item creando la card */}
            <ItemList/>        
        </div>
    )
}
