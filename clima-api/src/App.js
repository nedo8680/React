import React , { Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'

function App() {
  //State
  const [busqueda,guardarBusqueda]= useState({
    ciudad: "",
    pais: ""
  });
  
  const [enviarData,actualizarEnviarData] = useState(false)
  const [clima,actualizarClima]=useState({});
  const [errorConsulta, actualizarErrorConsulta] = useState(false);

  //destructuring
  const {ciudad, pais} = busqueda;

  useEffect(()=>{
    const consultarApi = async () =>{

      if(enviarData){
        const key = 'c2f0120c1c15fd6d0597e04517845316';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}&units=metric`
        const respuesta = await fetch (url);
        const resultado = await respuesta.json();
        console.log(resultado);
        actualizarClima(resultado);
        actualizarEnviarData(false)

        if(resultado.cod === "404"){
          actualizarErrorConsulta(true)
        }else{
          actualizarErrorConsulta(false)
        }
      }
      
    }
    consultarApi()
  },[enviarData] );
  let componente;

  if(errorConsulta){
    componente = <Error mensaje="La ciudad no se encuentra..."/>;
  }else{
    componente = <Clima clima={clima} />
  }
  return (
    <Fragment>
      <Header 
        titulo='Clima React'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
                <Formulario 
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  actualizarEnviarData={actualizarEnviarData}
                />
            </div>
            <div className="col m6 s12">
                {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
