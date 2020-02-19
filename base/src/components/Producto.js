import React from 'react';

const Producto = ({ producto , carrito , agregarProducto , productos }) => {
    const { nombre, precio, id } = producto;
    
    // Agrega productos al carrito
    const seleccionarProducto = id =>{
        const productoSeleccionado = productos.find( producto =>  producto.id === id );
        //const productoSeleccionado = productos.filter( producto =>  producto.id === id ); //El tutorial era con filter() pero a la hora de volver hacer el ejercicio lo implemente sin querer con find() :P 
        
        agregarProducto ([
            ...carrito, 
            productoSeleccionado 
        ])
    }

    // Eliminar producto del carrito
    const eliminarProducto = (id) => {
        const producto =  carrito.filter( producto =>  producto.id !== id )
        agregarProducto (producto)
        console.log(producto)
    }
    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            { productos 
            ?
            <button
                onClick={()=> seleccionarProducto(id)}
            >
            Comprar</button>
            :
            <button
                onClick = { () => eliminarProducto(id)}
            >
                eliminar</button>
            }
            
        </div>
     );
}
 
export default Producto;