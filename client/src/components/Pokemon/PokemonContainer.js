import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {clearPokemonDetail, getPokemonDetail} from '../../actions/index';
import Pokemon from './index';

export const PokemonContainer = ({
	match,
	pokemonDetail,
	getPokemonDetail,
	clearPokemonDetail,
}) => {
	useEffect(() => {
		getPokemonDetail(match.params.id);
		return () => clearPokemonDetail();
	}, []);

	return (
		<div>
			{pokemonDetail && (
				<Pokemon
					id={pokemonDetail.id}
					name={pokemonDetail.name}
					hp={pokemonDetail.hp}
					attack={pokemonDetail.attack}
					defense={pokemonDetail.defense}
					speed={pokemonDetail.speed}
					height={pokemonDetail.height}
					weight={pokemonDetail.weight}
					types={pokemonDetail.Types}
					sprite={pokemonDetail.sprite}
				/>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		pokemonDetail: state.pokemonDetail[0],
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPokemonDetail: (id) => dispatch(getPokemonDetail(id)),
		clearPokemonDetail: () => dispatch(clearPokemonDetail()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
