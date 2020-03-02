import React , { useState, useEffect }from 'react';
import Preguntas from './components/Preguntas';
import Formulario from './components/Formulario';
import ListaGastos from './components/ListaGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarformulario, mostrarFormulario] = useState(true);
  const [gasto , guardarGasto] = useState([]);
  const [gastos , actualizarGastos] = useState({});
  const [creargasto , guardarCrearGasto] = useState(false);

// Cuando genera un nuevo gasto
  useEffect( () => {
    if(creargasto){

      // Agrega el nuevo presupuesto
      guardarGasto([
        ...gasto,
        gastos
      ])

      // Resta del presupuesto actual

      const presupuestoRestante = restante - gastos.cantidad;
      guardarRestante(presupuestoRestante);

      //Resetear a false
      guardarCrearGasto(false);

    }
    
  }, [gastos, creargasto, gasto , restante]);
  

  return (
    <div className="container">
      <header>
        <h1>Control de Gastos
        </h1>
        <div className="contenido-principal contenido">

          { mostrarformulario ? 
            (
              <Preguntas
                guardarPresupuesto = { guardarPresupuesto }
                guardarRestante = { guardarRestante }
                mostrarFormulario = { mostrarFormulario }
              />
            )
          : 
              (
                <div className="row">
                  <div className="one-half column">
                    <Formulario 
                      actualizarGastos = { actualizarGastos}
                      guardarCrearGasto = {guardarCrearGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <ListaGastos
                      presupuesto = {presupuesto} 
                      restante = {restante}
                      gasto = {gasto}
                    />
                    <ControlPresupuesto 
                      presupuesto = {presupuesto}
                      restante = {restante}
                    />
                  </div>
                </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
