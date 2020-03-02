import React from 'react';
import Gastos from './Gastos';

const ListaGastos = ({presupuesto, restante, gasto}) => {
    return (
        <div className="gastos-realizados">
            <h2>Lista de Gastos</h2>
            {gasto.map( gastos => (
                <Gastos 
                    key = {gastos.id} 
                    gastos = {gastos}
                />
                )
            )}
            
        </div>
    );
};

 
export default ListaGastos;