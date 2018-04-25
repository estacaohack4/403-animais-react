import React, { Component } from 'react';
import './App.css';
import Cabecalho from './Cabecalho';
import Banner from './Banner';
import Foto from './Foto';

import gerbil from './gerbil.jpg';
import lontra from './lontra.jpg';
import marmota from './marmota.jpeg';

class App extends Component {
  render() {
    return (
      <div>
        <Cabecalho/>
        <Banner/>

        <div className="fotos">
          <Foto imagem={gerbil} texto="Renan"/>
          <Foto imagem={lontra} texto="Lontra"/>
          <Foto imagem={marmota} texto="Marmota"/>
        </div>
      </div>
    );
  }
}

export default App;
