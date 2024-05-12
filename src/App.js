// import logo from './logo.svg';
import './App.css';
import React, { Fragment} from "react";
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    // <div className="App"></div>
    < Fragment>
        <Header
          titulo="Cotizador de Prestamos"
        />
        
        <div className="container">
          <Formulario />
        </div>
    </Fragment>
);
}

export default App;
