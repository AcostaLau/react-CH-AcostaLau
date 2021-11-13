
import '../css/count.css'


// ESTOS PARAMETROS LLEGAN DE ItemList.js
export const ItemCount = ({ valorInicial, stock, cantidad, funcion}) => {
    

    const suma = () => {
        if(valorInicial === stock){
            return valorInicial
        }else{
            cantidad(valorInicial + 1)


        }
        funcion()
    }
    const resta = () => {
        if(valorInicial === 0){
            return valorInicial
        }
        else{
            cantidad(valorInicial - 1)
        }   
        funcion()
    }



    return (
        <div className='contenedorBoton'>
            <button onClick={suma} className= 'suma'>+</button>
            <p>{valorInicial}</p>
            <button onClick={resta} className='resta'>-</button>
        </div>
    )
}
