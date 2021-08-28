import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
	clearPokemonDetail,
	getPokemons,
	getPokemonTypes,
	setPokemonsOrigin,
} from '../../actions';
import Home from './index';
import NotFound from '../NotFound/';
import {StyledDiv} from './styled';

export const HomeContainer = ({
	getPokemons,
	getPokemonTypes,
	pokemonViews,
	pokemonFilter,
	setPokemonsOrigin,
	clearPokemonDetail,
}) => {
	useEffect(() => {
		getPokemons();
		getPokemonTypes();
	}, [getPokemons, getPokemonTypes]);

	useEffect(() => {
		return () => clearPokemonDetail();
	}, []);

	const handleClick = (e) => {
		setPokemonsOrigin(e.target.value);
	};

	return (
		<StyledDiv>
			{pokemonViews.now.length ? (
				<div className='div_cards'>
					{pokemonViews.now.map((el) => (
						<Home
							pokemonFilter={pokemonFilter}
							handleClick={handleClick}
							key={el.id}
							id={el.id}
							name={el.name}
							hp={el.hp}
							attack={el.attack}
							defense={el.defense}
							speed={el.speed}
							height={el.height}
							weight={el.weight}
							types={el.Types}
							sprite={el.sprite}
						/>
					))}
				</div>
			) : (
				<NotFound handleClick={handleClick} />
			)}
		</StyledDiv>
	);
};

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons,
		pokemonViews: state.pokemonViews,
		pokemonFilter: state.pokemonFilter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPokemons: () => dispatch(getPokemons()),
		getPokemonTypes: () => dispatch(getPokemonTypes()),
		setPokemonsOrigin: (origin) => dispatch(setPokemonsOrigin(origin)),
		clearPokemonDetail: () => dispatch(clearPokemonDetail()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
