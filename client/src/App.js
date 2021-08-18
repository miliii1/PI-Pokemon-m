import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Principal from './components/Principal';
import Home from './components/Home';
import AddPoke from './components/AddPoke';
import PokeDetails from './components/PokeDetails'; 

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Principal}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/home/createpokemon" component={AddPoke}/>
      <Route exact path="/home/pokemon/:id" component={PokeDetails}/>
    </React.Fragment>
  );
}

export default App;

