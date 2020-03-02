import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({actualizarGastos, guardarCrearGasto}) => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState (0);
    const [ error, actualizarError ] = useState (false);

    const guardarGasto = e =>{
        e.preventDefault();
        //validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '' ){
            actualizarError (true)
            return
        }

        actualizarError(false);

        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id : shortid.generate()
        }

        //pasar el gasto al componente principal
        actualizarGastos(gasto);
        guardarCrearGasto(true);
        //resetear el form
        guardarNombre('');
        guardarCantidad(0);
    } 

    return (  
        
        <form
            onSubmit={ guardarGasto}
        >
            
            <h2>Agregar Gastos</h2>
            {error ? <Error mensaje="Los campos no son correctos"/> : null }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e =>  guardarCantidad( parseInt(e.target.value) )}
                />
            </div>
            <input 
                type="submit"
                className="button-primary"
                value="Agregar Gasto"
            />
        </form>
    );
}
 
export default Formulario;