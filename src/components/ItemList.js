import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { Item } from './Item'

export const arrayProductos = [
    {
        id: 1,
        nombre: 'Air Jordan 3 Retro',
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/ttt1-0f57261c4cf9edbacc16341000430372-480-0.jpeg',
        categoria: 'jordan'
        
    },

    {
        id: 2,
        nombre: 'Air Jordan 3 Retro "A Ma Maniére"',
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/rrrrrrrrrr1-fb54b349ac3b8607bc16340995761219-480-0.jpeg',
        categoria: 'jordan'
    },

    {
        id: 3,
        nombre: 'Air Jordan 3 "inker Black"',
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/qqqqqqqq1-c31bc50b148f3d05fb16340994341010-480-0.jpeg',
        categoria: 'jordan'
    },

    {
        id: 4,
        nombre: 'Air Jordan 3 Retro "Barely Grape"',
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/lll-a5921ff69d774bb1ff16340977707425-480-0.jpeg',
        categoria: 'jordan'
    },

    {
        id: 5,
        nombre: 'Air Jordan 3 Retro "Triple White"',
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/jjj1-a2f61118126e9a274d16340972300962-480-0.jpeg',
        categoria: 'jordan'
    },

    {

    id: 6,
    nombre: 'Air Jordan 3 Retro "Varsity Royal Cement"',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/oooooooooo-cccff22cba679d46d016340989466653-480-0.jpeg',
    categoria: 'jordan'

    },

    {

    id: 7,
    nombre: 'Blazer Low LE "White Canvas"',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/eeeeeeeeeeee11-5462e678b4d72b859b16342651413681-480-0.jpeg',
    categoria: 'nike'

    },

    {

    id: 8,
    nombre: 'Nike SB Blazer Low Sacai "Black White"',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/xxxx11-dace324fbe040ade5c16343282939995-480-0.jpeg',
    categoria: 'nike'

    },

    {

    id: 9,
    nombre: 'Nike Kyrie 7 GS "Ripple"',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/3e85360a1-936ae806e9ab1a5aca16343151410482-480-0.jpeg',
    categoria: 'nike'

    },

    {

    id: 10,
    nombre: 'Nike Blazer Low "Scai White Jade Orange Varisity"',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/ggggggggg1-bfd1b0b5e081e4f40216342656602031-480-0.jpeg',
    categoria: 'nike'

    },

    {

    id: 11,
    nombre: 'Nike Blazer Low sacai Medium "Grey Classic Green"',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/dddddddddd1-b9e7065700895ba01816341428863114-480-0.jpeg',
    categoria: 'nike'

    },

    {

    id: 12,
    nombre: 'Nike Blazer Low sacai "White Black"',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/eeeeeeeeee1-08cf2e295c79a8b54f16341438579703-480-0.jpg',
    categoria: 'nike'

    },

    {

    id: 13,
    nombre: 'Adidas Forum 84 Low OG "Bright Blue"',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/ 52fdb8281-991777bc4c4af93c0716297407780704-480-0.jpeg',
    categoria: 'adidas'

    },

    {

    id: 14,
    nombre: 'Adidas Forum 84 Low "White Crew Green"',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/9a0569671-8255f3f3212db950a716297404957560-480-0.jpeg',
    categoria: 'adidas'

    },

    {

    id: 15,
    nombre: 'Adidas Forum Low x Bad Bunny ´Brown´',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/cac68cde1-a2b017f987639aeb1d16239439785016-480-0.jpg',
    categoria: 'adidas'

    },

    {

    id: 16,
    nombre: 'Adidas Superstar Melting Sadness',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/cef49bbc1-2c4484a136a7130aea16064141140089-480-0.jpeg',
    categoria: 'adidas'

    },

    {

    id: 17,
    nombre: 'Adidas Yeezy 500 Salt',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/1adae92d1-9bf132e3836255f3ea16249787692922-480-0.jpg',
    categoria: 'adidas'

    },

    {

    id: 18,
    nombre: 'Adidas Yeezy 500 Enflame',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/160/313/products/ed28d9981-d1e1a96e49a9dd17f916249794597838-480-0.jpg',
    categoria: 'adidas'

    }
]

export let titulo = '';
export const ItemList = () => {

    // declaramos un array vacio el cual se va a rellenar con el array de objetos una vez que la funtion getProductos sea activada
    const [productos, setProductos] = useState([])

    const { idProducto } = useParams()
    
    // usamo el useEffect para que solo se ejecute una vez sola 
    useEffect(() => {
        
        // declaramos un promise para que la function getProductos sea activada una vez que la info llega
            const getPromise = new Promise((res, rej) =>{
                res(getProductos());
            })
    
            getPromise
            .then((resultado) => console.log(resultado))
            .catch((reject) => console.log(reject))

        }, [idProducto])
    const getProductos = () =>{
        
        setTimeout(() =>{
            if (idProducto) {
                setProductos(arrayProductos.filter(product => product.categoria === idProducto))
            } else {
                setProductos(arrayProductos)
                
            }
            // ponemos setProductos ya que cuando getProductos sea activado el useState cambiara con este array de objetos
            
        }, 1000)
    }

    
// toda esta info llega a Item que es el componente que tiene la card para poder darle forma a estos objetos
    return (

        // a 'productos' que ahora contiene el array de objetos le realizamos un map.
        productos.map((product) =>{
            
            return(
    
                        <Item key={product.id} data = {product}></Item>
                    
                 
                // a este map le pasamos el id y por data le pasamos todo el objeto.
                
            )
        })

    )
}