import React, { Component } from 'react';
import './App.css';

import Tile from './Tile.js';

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <Tile name='Home and Away'></Tile>
      </div>
    );
  }
}
export default App;
