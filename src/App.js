
//import './App.css';
import Password from './Password/Password';
// import './Password.css'
import './Click/click.css'
import './suduko/suduko.css'
import Click from './Click/Click';
import Suduko from './suduko/Suduko';
import React from 'react';
import Grid from './game/Grid';
import './game/Grid.css'

function App() {
  return (
    <div className="App">
      {/* <Password/> */}
      {/* <Click /> */}
      {/* <Suduko /> */}
      <Grid/>
    </div>
  );
}

export default App;
