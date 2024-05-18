// import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import Resultado from "./componentes/Resultado";
import Mensaje from './componentes/Mensaje';
import Spinner from './componentes/Spinner';


function App() {

  /*Definir el state*/
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  // carga condicional de componentes
  let componente;
  if(cargando){
    componente = <Spinner />
  }
  else if(total === 0){
    componente = <Mensaje />
  }else {
    componente = <Resultado
                    total={total}
                    plazo={plazo}
                    cantidad={cantidad}
                 />
  }

  return (
    // <div className="App"></div>
    < Fragment>
      <Header
        titulo="Cotizador de Prestamos"
      />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
        <div className='mensaje'>
          {/* <p>Total a pagar:  ${total}</p> */}
        {/* <Mensaje /> */}
        {componente}
        </div>
        
      </div>
    </Fragment>
  );
}

export default App;
