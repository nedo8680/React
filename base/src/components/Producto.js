import React from 'react';

const Producto = ({producto}) => {
    const {nombre,precio} = producto;
    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
        </div>
     );
}
 
export default Producto;