import React from 'react';
import Producto from './Producto';

import './Carrito.css';
const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h1>Tu carrito</h1>

        { carrito.length === 0 
        ?
        <h2>¡ NO HAY PRODUCTOS EN TU CARRITO !</h2> 
        :
        carrito.map( producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto = {agregarProducto}
            />
            )
           
        )
        }
    </div>
    )
 
export default Carrito;