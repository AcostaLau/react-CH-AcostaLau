import { ItemList } from './ItemList'
import  '../css/itemListContainer.css'
import { Filtros } from './filtros/Filtros'








export const ItemListContainer = () => {
    return (
        <>
            <h1 className='h1'>Nuestros productos</h1>
            <Filtros/>      
               {/* llega ItemList con toda la data que el paso Item creando la card */}
            <div className='containerItemList'>
            <ItemList/>
            </div>
                    
        </>
    )
}
