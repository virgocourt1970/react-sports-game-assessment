import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./components/game/Game"
import raccoonlogo from "./assets/images/raccoon.png"
import squirrellogo from "./assets/images/squirrel.png"
import bunnieslogo from "./assets/images/bunny.png"
import houndslogo from "./assets/images/hound.png"


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonlogo
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrellogo
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunnieslogo
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndslogo
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
