import React, {useState} from 'react';
import Error from './Error'


const Formulario = ({busqueda,guardarBusqueda,actualizarEnviarData}) => {


    // error
    const [error,guardarError] = useState(false);

    //destructuring
    const {ciudad, pais} = busqueda;

    //Evento que toma los valores
    const getInputhandler = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    
    //submit
    const submitHandler = e =>{
        e.preventDefault();
        //  error
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);
        //Para que consulte la informacion una vez dado submit
        actualizarEnviarData(true)

    }
    return ( 
        <form onSubmit={submitHandler}> 
        {error ? <Error mensaje="Revisa los campos" /> :null }
            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={getInputhandler}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={getInputhandler}
                >
                    <option value=""> --- Selecciona un país --- </option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
     );
}
 
export default Formulario;