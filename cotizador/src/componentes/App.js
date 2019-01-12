import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario';

class App extends Component {
  render() {
    return (
      <div className="Contenedor">
          <Header title="Cotizador de Seguro de auto" />
          <Formulario/>
      </div>
    );
  }
}

export default App;
