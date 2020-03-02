import React from 'react';

const Gastos = ({gastos}) => {
    return ( 
        <li className="gastos">
            <p>{gastos.nombre}
                <span className="gasto">$ {gastos.cantidad}</span>
            </p>
        </li>
     );
}
 
export default Gastos;