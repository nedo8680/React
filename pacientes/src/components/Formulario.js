import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

const Formulario = ({agregarCitas}) => {

    // Crea el state de cita

    const [cita, actualizarCita] = useState({
        mascota:"",
        propietario: "",
        fecha:"",
        hora: "",
        sintomas :""
    })
    // State de errores : se recomienda el uso de varios states 
    const [error , actualizarError] = useState(false);

    // Función que se ejecuta cada vez que el usuario escribe en el input

    const actualizarState = e =>{
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }
    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Cuando el usuario presiona agendar 
    const submitCita = (e) =>{
        e.preventDefault();
        
        //Validación
        if( mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "" ){
            actualizarError(true);
            return
        } 

        // Eiminar Mensaje de validacion
        actualizarError(false);

        // Genera un id 
        cita.id = uuid();
        
        // Crear Cita
        agregarCitas(cita);

        // Limpiar formulario cuando se agenda la cita
        actualizarCita({
            mascota:"",
            propietario: "",
            fecha:"",
            hora: "",
            sintomas :""
        })

    }
    return ( 
        <Fragment>
            <h1>Datos básicos</h1>
            <form
                onSubmit={submitCita}
            >
                {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
                <label>Nombre de la mascota</label>
                <input 
                    type="text"
                    name="mascota" 
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del propietario</label>
                <input 
                    type="text"
                    name="propietario" 
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha" 
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora" 
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas" 
                    className="u-full-width"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agendar</button>
            </form>
        </Fragment>
     );
}

Formulario.propTypes ={
    agregarCitas: PropTypes.func.isRequired
}
export default Formulario;