import React, {Fragment , useState , useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //localStorage : Se utilza para guardar datos en el navegador solo permite guardad strings

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if( !citasIniciales ){
    citasIniciales = []
  }
  
  // Arreglo de Todas las Citas
  const [citas , actualizarCitas] = useState(citasIniciales);

  // useEffect se utilza cuando un documento React esta listo o cuando hacemos cambios en el State Algo asi como docume.ready de Jquery o ComponentUpdate(React)
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem ('citas' , JSON.stringify(citas) );
    }else{
      localStorage.setItem ( 'citas' , [] );
    }
      
  });
  // Agregar citas
  const agregarCitas = cita =>{
      actualizarCitas([ ...citas, cita])
  }

  // Eliminar cita 
  const eliminarCita = id =>{
    const citasActualizadas = citas.filter( cita => (cita.id !== id) ) // filter() retorna un ARRAY y para este caso se necesita un ARRAY para actualuzar el state
    //const citasActualizadas2 = citas.find( cita => (cita.id !== id) ) // find() retorna un objeto 
    //console.log(citasActualizadas,"filter")
    //console.log(citasActualizadas2,"find")
    actualizarCitas(citasActualizadas);
  }

  // Eliminar Citas

  const titulo = citas.length === 0 ? "No hay citas" : "Citas Abiertas"
  return (
    <Fragment>
      
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
          <Formulario
            agregarCitas ={agregarCitas}
          />
          </div>
          <div className="one-half column">
            <h1>{titulo}</h1>
            {citas.map( cita=>(
                <Cita
                  key = {cita.id}
                  cita= {cita}
                  eliminarCita = {eliminarCita}
                />
              ))}
            
            
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
