import React, {Fragment, useState} from 'react';
import Error from './Error';

const Preguntas = ( { guardarPresupuesto, guardarRestante, mostrarFormulario} ) => {
    
    const [ cantidad , guardarCantidad] = useState(0);
    const [ error, guardarError ]  = useState(false);

    // Esta funcion define el presupuesto y convierte el valor en un entero (Por que se obtiene como String)

    const  definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value) );
    };

    // Agregar Cantidad
    const agregarCantidad = e => {
        e.preventDefault();

        //Validar
        if (cantidad <1 || isNaN(cantidad) ){
            guardarError(true);
            return
        }
        
        // si  pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        mostrarFormulario(false);
    }

return (  
    
    <Fragment>
        <h2>Coloca tu presupuesto</h2>
        {error ? <Error mensaje="El presupuesto no es valido"/>: null }
        <form
             onSubmit= {agregarCantidad}
        >
            <input
                type="number"            
                className="u-full-width"
                placeholder="Escribe tu presupuesto"
                onChange = {definirPresupuesto}
            />
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Definir presupuesto"
            />
        </form>
    </Fragment>
)
}

 
export default Preguntas;
