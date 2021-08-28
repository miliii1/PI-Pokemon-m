import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home/Homecontainer';
import Nav from './components/Nav/index';
import Search from './components/Search/SearchContainer';
import Paginate from './components/Paginate/Paginatecontainer';
import Pokemon from './components/Pokemon/PokemonContainer';
import Create from './components/CreatePokemon/CreateContainer';

function App() {
	return (
		<React.Fragment>
			<Route path='/' component={Nav} />
			<Route exact path='/' component={LandingPage} />
			<Route path='/home' component={Search} />
			<Route path='/home' component={Home} />
			<Route path='/home' component={Paginate} />
			<Route path='/pokemon/:id' component={Pokemon} />
			<Route path='/create' component={Create} />
		</React.Fragment>
	);
}

export default App;
